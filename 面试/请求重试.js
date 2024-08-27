// 实现一个重试功能，当异步任务失败时，等待N秒自动重试直到成功后达到最大重试次数

const query = () => {
  return fetch(
    'xxx'
  )
}

const retry = (task, count=5, time=1000) => {
  return new Promise((resolve, reject) => {
    let doneCount = 0
    const run = () => {
      task()
        .then(data => resolve(data))
        .catch(error => {
          doneCount++
          if (doneCount > count) {
            reject(error)
          } else {
            setTimeout(run, time)
          }
        })
    }
  })
}

retry(query)