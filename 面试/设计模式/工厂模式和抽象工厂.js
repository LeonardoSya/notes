// 工厂模式提供创建对象的接口，对象被创建后可以修改


// 通过类实现
class Alien {
  constructor(name, phrase) {
    this.name = name
    this.phrase = phrase
    this.species = 'alien'
  }
  fly = () => console.log('fly!')
  sayPhrase = () => console.log(this.phrase)
}

const alien1 = new Alien('Ali', 'I m Ali the alien!')


// 通过工厂函数实现
function Eva(name, phrase) {
  this.name = name
  this.phrase = phrase
  this.species = 'eva'
}

Eva.prototype.fly = () => console.log('fly')
Eva.prototype.sayPhrase = function () { console.log(this.phrase) } // 这里用箭头函数就会使this指向全局对象

const eva1 = new Eva('ev', 'im ev the Eva')
console.log(eva1.name)
console.log(eva1.phrase)
eva1.sayPhrase()
eva1.fly()


// 抽象工厂 给工厂模式添加一个抽象层，通过单个类和工厂函数创建不同类型的对象
class Car {
  constructor() {
    this.name = 'car'
    this.wheels = 4
  }
  turnOn = () => console.log('car turn on')
}
class Truck {
  constructor() {
    this.name = 'truck'
    this.wheels = 8
  }
  turnOn = () => console.log('truck turn on')
}
// 抽象工厂作为单一交互点 与客户端交互，接受特定类型作为参数，调用对应工厂类型
const factory = {
  createFactory: function (type) {
    switch (type) {
      case 'car':
        return new Car()
      case 'truck':
        return new Truck()
      default:
        return null
    }
  }
}

const myCar = factory.createFactory('car')
console.log(myCar)
