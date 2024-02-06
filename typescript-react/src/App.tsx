// * 组件一般不写返回值类型，就用默认推导的 React组件的JSX默认返回类型就是 React.ReactNode
// * FC = Function Component，参数是props, 返回值是ReactNode

//* useRef: 保存dom引用 HTMLDivElement 此时参数需要传个null  保存其他内容时看情况且不需要null
//* 为什么null? 因为保存dom引用时返回RefObject, 它的current是readonly，因为保存的dom引用不能被更改
//* 因为 ref 既可以保存 dom 引用，又可以保存其他数据，而保存 dom 引用又要加上 readonly，所以才用 null 做了个区分。
//* 传 null 就是 dom 引用，返回 RefObject，不传就是其他数据，返回 MutableRefObject

