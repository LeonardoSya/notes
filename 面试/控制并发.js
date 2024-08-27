async function featchWithConcurrencyLimit(urls, limit) {
  const results = []  // 存储每个请求的Promise
  const executing = []  // 存储当前正在执行的请求的Promise，以便控制并发数量

  for (const url of urls) {
    const promise = (async () => {
      const response = await fetch(url)
      return response.json()
    })()

    results.push(promise)
    executing.push(promise)

    if (executing.length > limit) {
      await Promise.race(executing)  // 并发数量超了就设置一个竞态
      executing.splice(executing.indexOf(promise), 1)  // 移除已完成的请求
    }
  }

  return Promise.all(results)  // 等待所有请求完成，然后返回promise
}


// 使用
const urls = [
  'https://api.example.com/data/1',
  'https://api.example.com/data/2',
]

featchWithConcurrencyLimit(urls, 10).then(results => {
  console.log('所有请求已完成', results)
}).catch(error => {
  console.error(error)
})