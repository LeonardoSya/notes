// 保存effect调用栈
const effectStack = [];

// subscribe 与 cleanup 是一对相反的操作
function subscribe(effect, subs) {
    subs.add(effect);  // 订阅关系建立
    effect.deps.add(subs);   // 依赖关系建立
}

function cleanup(effect) {
    for (const subs of effect.deps) {     // 从该effect订阅的所有state对应subs中移除该effect
        subs.delete(effect);
    }
    effect.deps.clear();   // 将该effect依赖的所有state对应subs删除
}

function useState(value) {
    const subs = new Set();    // 保存订阅该state变化的effect

    const getter = () => {
        const effect = effectStack[effectStack.length - 1];     // 获取当前上下文的effect
        if (effect) {
            subscribe(effect, subs);   // 建立订阅发布关系
        }
        return value;
    }

    const setter = (nextValue) => {
        value = nextValue;
        for (const effect of [...subs]) {   // 通知所有订阅该state变化的effect执行
            effect.execute();
        }
    }

    return [getter, setter];
}


function useEffect(callback) {

    const execute = () => {
        cleanup(effect);  // 重置依赖
        effectStack.push(effect);   // 将当前的effect推入栈顶

        try {
            callback();
        } finally {
            effectStack.pop();  // 弹出effect
        }
    }

    // effect是每个useEffect对应的数据结构
    const effect = {
        execute,
        deps: new Set(),
    }

    execute();  // 立即执行一次，建立订阅发布关系  
} 



// 因此，可以实现useMemo
function useMemo(callback) {
    const [s, set] = useState();
    useEffect(() => set(callback()));  // 首次执行callback，建立回调中state的订阅发布关系
    return s;
}