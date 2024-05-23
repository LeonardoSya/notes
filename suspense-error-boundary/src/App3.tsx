import { useEffect } from "react"
import { ErrorBoundary } from "react-error-boundary"

const Bbb = () => {
  useEffect(() => {
    throw new Error('xxx')
  }, [])
  return <div>bbb</div>
}

export default function App3() {
  return (
    <ErrorBoundary fallbackRender={({ error }) => {
      return (
        <div>出错了: {error.message}</div>
      )
    }}>
      <Bbb />  
    </ErrorBoundary>
  )
}

// * 组件抛出错误时，会向上寻找最近的ErrorBoundary组件
// * ErrorBoundary捕获组件throw的Error，Suspense捕获组件throw的promise