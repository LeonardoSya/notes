new Promise((resolve, reject) => {
    let b, result

    if (b) {
        resolve(result)   //! 而不是 return result
        return
    }
})

//* 不要在Promise构造函数中返回值 return result的值是无用的，也不影响Promise的状态
//* 正确的方法是用resolve传递值，如果有错误则用reject传递错误