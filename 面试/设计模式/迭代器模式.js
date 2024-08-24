// 提供一个统一接口，使不同集合结构的遍历通过相同方式进行

class CustomCollection {
  constructor(items = []) {
    this.items = items
  }

  [Symbol.iterator]() {
    let i = 0
    const items = this.items

    return {
      next() {   // 迭代器必须实现一个next方法， next()返回下一个值的描述对象
        if (i < items.length) {
          return { value: items[i++], done: false }
        } else {
          return { done: true }
        }
      }
    }
  }
}

const collection = new CustomCollection(['a', ['ss', 'sss'], 1, 2, { 'name': 'Alice' }])

for (const item of collection) {
  console.log(item)
}

