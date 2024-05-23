import { useEffect, useState } from "react"

const fetchData = (): Promise<{ msg: string }> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ msg: 'hello world' })
    }, 1000)
  })
}

export default function WorkApp() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<{ msg?: string }>({})

  const handleIsLoading = async () => {
    setLoading(true)
    const data = await fetchData()
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    handleIsLoading()
  }, [])

  return (
    <>
      {loading ? 'loading' : data.msg}
    </>
  )
}