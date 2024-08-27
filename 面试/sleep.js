

const sleep = async (time) => {
  // 使用new Promise可以将setTimeout封装为一个Promise，这样异步操作可以等待该操作完成 并像同步代码一样处理
  return new Promise(resolve => setTimeout(resolve, time))
}


const run = async () => {
  console.log('start')
  await sleep(2000)
  console.log('end')
}

run()