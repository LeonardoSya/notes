const arr = [1, 2, 3, 4]

// 1. forEach 不操作原数组 无返回值 只进行数组遍历和执行
const forEach_arr = arr
forEach_arr.forEach((item, index) => { item + index })
console.log(forEach_arr)  // [1,2,3,4] 不操作原数组
forEach_arr.forEach((item, index) => { arr[index] = item + index })
console.log(forEach_arr)  // [1,3,5,7] 操作了原数组

// arr = [1,3,5,7]

// 2. filter 创建新数组
const filter_arr = arr.filter((item, index) => item + index === 1)
console.log(filter_arr)  // [1]

// 3. reduce 累加器（也可以是其他符号）
const reduce_arr = arr.reduce((accumulator, e) => accumulator * e, 10)
// 多维数组扁平化
const arr2 = [[1, 2, 3], [3, 4, 5], [5, 6], 7]
const reduce_arr2_to_arr = arr2.reduce((accumulator, e) => accumulator.concat(e), [100])
console.log(reduce_arr2_to_arr)

// 统计数组中元素出现次数
const count = ['aa', 'bbb', 'cc', 'cc', 'aaa', 'a']
const reduce_count = count.reduce((accumulator, e) => {
  accumulator[e] ? accumulator[e]++ : accumulator[e] = 1
  return accumulator
}, {})  // {}初始化累加器，确保accumulator在第一次迭代时已经是一个对象，可以直接向其中添加键值对
console.log(reduce_count)

// 4. sort
count.sort((a, b) => b.length - a.length)
console.log(count)