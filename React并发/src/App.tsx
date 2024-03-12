import { useTransition, useState } from 'react'

const App = () => {
  const [input, setInput] = useState('')
  const [data, setData] = useState([])
  // * useTransition返回一个包含两个元素的数组：
  // * 一个boolean，表示是否有任何低优先级更新正在进行。另一个是用来启动transition的startTransition函数
  const [isPending, startTransition] = useTransition()

  //* react进行两次渲染：一次高优先级渲染 将isPending翻转为true
  //* 另一次低优先级更新，包含传递给startTransition的实际状态更改
  const handleChange = (e) => {
    setInput(e.target.value)
    startTransition(() => {
      // fetchDataBase是一个异步函数，用于获取数据
      const res = fetchDataBase(e.target.value)
      setData(res)
    })
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending ? <span>Loading...</span> : <span>OK</span>}
    </>
  )
}

export default App