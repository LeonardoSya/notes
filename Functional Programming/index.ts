
// // export function userIdEquals(userId) {
// //     // Currying 上一步的状态绑定到下一步
// //     return function (receipt) {
// //         return receipt.userId === userId
// //     }
// // }

// export function map(receipts, transform, index = 0) {
//     if (index < receipts.length) {
//         const elements = map(receipts, transform, index + 1)

//         const receipt = receipts[index]
//         const transformed = transform(receipt)

//         return [transformed].concat(elements)
//     } else {
//         return []
//     }
// }

// const userId = '123'
// // const filtered = filter(receipts, (receipt) => receipt.userId === userId)

