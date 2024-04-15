async function fnn(reqs) {
    // 存储所有异步操作的promise
    const promises = reqs.map((req) => req)
    // 并行处理所有异步请求
    // Pomise.all方法接收一个Promise对象的数组，并返回一个新的Promise，这个新的Promise在所有输入的Promise都成功解决后解决
    const results = await Promise.all(promises)
    // results包含所有异步操作结果的数组
    return results
}

//!  如果有多个独立的异步请求需要同时发起，并且它们之间没有依赖关系，那么使用Promise.all
// 比如应用启动时从多个数据源拉取数据，这些数据互不依赖
