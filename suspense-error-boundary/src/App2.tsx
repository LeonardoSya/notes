import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      message: error.message,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <div>出错了: {this.state.message}</div>
    }
    return this.props.children
  }
}


function Bbb() {
  const b = window.a.b

  return <div>{b}</div>
}

export default function App2() {

  // ErrorBoundary的作用：捕获子组件抛出的错误，显示对应的UI
  return <ErrorBoundary>
    <Bbb></Bbb>
  </ErrorBoundary>
}