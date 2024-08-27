import { useEffect, useState } from "react"

export default function App() {
  const operators: string[] = ['+', '-', '*', '/']

  // 生成数字和运算符的函数
  const generateMathProblem = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    const operator = operators[Math.floor(Math.random() * operators.length)]

    if (operator === '/' && num1 % num2 !== 0) {
      return generateMathProblem()
    }

    return { num1, num2, operator }
  }

  // 校验结果的函数
  const caculateAnswer = ({ num1, num2, operator }: { num1: number, num2: number, operator: string }) => {
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
    if (parseInt(value) === correctAnswer) {
      alert('Bingo!')
    } else {
      alert('Wrong!')
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
      <input type="text" placeholder="请输入答案" onChange={e => { setValue(e.target.value) }} value={value} />
      <button onClick={handleSubmit}>提交</button>
    </div>
  )
}