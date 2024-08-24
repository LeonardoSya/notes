

const sleep = async (time) => {
  return new Promise(resolve => setTimeout(resolve, time))
}


const run = async () => {
  console.log('start')
  await sleep(2000)
  console.log('end')
}

run()