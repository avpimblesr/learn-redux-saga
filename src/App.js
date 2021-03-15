import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Counter from './Counter'
import { getUser } from './redux/ducks/user'
import './App.css'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [])

  const user = useSelector((state) => state.user.user)
  console.log(user)


  const count = useSelector((state) => state.counter.count)
  const voters = ['Anthony Sistilli', 'Bob Smith', 'Stephanie Foo', 'Kevin Ma']

  return (
    <div className='App'>
      <h1>Redux made easy</h1>
      <h2>Totoa Votes: {count}</h2>
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}
    </div>
  )
}

export default App
