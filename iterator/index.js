// Symbol.iterator被用于定义一个对象的默认迭代器，当一个对象需要被迭代(for..of/解构赋值)会调用此属性

// 给Object.prototype添加Symbol.iterator方法 所有对象都会被这个更改影响
Object.prototype[Symbol.iterator] = function () {
  // 获取当前对象的所有可枚举属性值(数组), 然后返回这些值的迭代器(调用数组的迭代器方法)
  return Object.values(this)[Symbol.iterator]()
}

const [a, b] = { a: 1, b: 2 }

console.log(a, b)


