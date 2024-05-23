import React, { } from 'react'
import './App.css'

const Aaa: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props

  return (
    <div className='container'>
      {
        React.Children.map(children, (item) => {
          return <div className='item'>{item}</div>
        })
      }
    </div>
  )
}

function App() {
  return (
    <Aaa>
      <a href='#'>Link 1</a>
      <a href='#'>Link 2</a>
      <a href='#'>Link 3</a>
    </Aaa>
  )
}

export default App
