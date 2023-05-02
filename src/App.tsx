import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  setCount(1);
  console.log(count);
  return (
    <>
      <div>
        <h3>Teste Frontend PL </h3>
      </div>
    </>
  )
}

export default App
