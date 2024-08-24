import { useEffect, useState } from "react"

export default function App() {
  const operators: string[] = ['+', '-', '*', '/']

  const generateMathProblem = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    const operator = operators[Math.floor(Math.random() * operators.length)]

    if (operator === '/' && num1 % num2 !== 0) {
      return generateMathProblem()
    }

    return { num1, num2, operator }
  }

  const caculateAnswer = ({ num1, num2, operator }) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return 0;
    }
  }

  const [value, setValue] = useState<string>('')
  const [mathProblem, setMathProblem] = useState(generateMathProblem())
  const [correctAnswer, setCorrectAnswer] = useState(caculateAnswer(mathProblem))

  const handleSubmit = () => {
    if (parseFloat(value) === correctAnswer) {
      alert('回答正确')
    } else {
      alert('回答错误')
      setMathProblem(generateMathProblem())
    }
    setValue('')
  }

  useEffect(() => {
    setCorrectAnswer(caculateAnswer(mathProblem))
  }, [mathProblem])


  return (
    <div>
      <p>{`please calculate ${mathProblem.num1} ${mathProblem.operator} ${mathProblem.num2} = ?`}</p>
      <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} placeholder="请输入正确答案" />
      <button onClick={handleSubmit}>提交</button>
    </div>
  )
}