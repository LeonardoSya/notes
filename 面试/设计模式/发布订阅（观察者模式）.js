
class EventEmitter {
  constructor() {
    // 初始化一个空对象events，用于存储事件及其对应的订阅者
    // {
    //   event: [callback1, callback2,...] 每个事件名作为events对象的键，值是数组，存储所有订阅了该事件的回调函数
    // }
    this.events = {}
  }

  // 订阅事件
  on(event, listener) {
    if (!this.events[event]) {  // 检查events对象中是否已有这个事件名的键
      this.events[event] = []  // 如果事件的键不存在，就创建一个新的空数组存储这个事件的所有订阅者（回调）
    }
    this.events[event].push(listener)
  }

  // 取消订阅
  off(event, listenerToRemove) {
    if (!this.events[event]) return // 如果没有这个事件的键，直接返回
    // 过滤掉要移除的订阅者（回调），用新生成的订阅者数组覆盖原数组
    this.events[event] = this.events[event].filter(listener => listener !== listenerToRemove)
  }

  emit(event, ...args) {
    if (!this.events[event]) return
    this.events[event].forEach(fn => fn(...args))
  }
}



const eventEmitter = new EventEmitter()

const login = username => console.log(`${username} has logged in`)
const logout = username => console.log(`${username} has logged out`)

// 订阅事件
eventEmitter.on('login', login)
eventEmitter.on('logout', logout)

// 触发事件 
eventEmitter.emit('login', 'Alice')  // Alice has logged in
eventEmitter.emit('logout', 'Alice')  // Alice has logged out

// 取消订阅
eventEmitter.off('login', login)
eventEmitter.emit('login', 'Petter')  // 无输出，因为已经取消订阅



