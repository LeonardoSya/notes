// 目标对象 —— 代理对象所代表的真实对象
const realSubject = {
  request: function () {
    return 'Real Subject: Handling request'
  }
}

// 代理对象（proxy） —— 控制访问目标对象，会在目标对象的基础上添加额外行为
const proxy = {
  subject: realSubject,

  request: function () {
    console.log('Proxy: Checking access prior to firing a real request')

    // 代理对象控制对真实对象的访问
    const result = this.subject.request()

    console.log('Proxy: Logging the time of request')

    return result
  }
}

console.log(proxy.request())