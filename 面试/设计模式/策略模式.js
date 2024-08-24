
const calculateMoney = function (level, salary) {
  const strategies = {
    'S': salary => salary * 4,
    'A': salary => salary * 3,
    'B': salary => salary * 2
  }

  const strategy = strategies[level]

  return strategy(salary)
}

console.log(calculateMoney('S', 2000))