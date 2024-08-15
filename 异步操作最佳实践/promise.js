const myPromise = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve('foo')
  }, 300);
})

myPromise
.then((value) => console.log(value),() => console.log('error'))
.then(() => console.log('success'))
// 在没有迫切需要的情况下，最好将错误处理留到最后一个 .catch() 语句
// .catch() 其实就是一个没有为 Promise 兑现时的回调函数留出空位的 .then()。
.catch(console.log('error'))