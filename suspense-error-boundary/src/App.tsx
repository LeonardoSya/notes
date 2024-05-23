import './App.css'
import React, {Suspense} from 'react'
import App2 from './App2'
import App3 from './App3'
import WorkApp from './业务代码'

const LazyAaa = React.lazy(() => import('./Aaa'))

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAaa />
      </Suspense>
      {/* <App2 /> */}
      {/* <App3 /> */}
      <WorkApp />
    </>
  )
}

export default App


