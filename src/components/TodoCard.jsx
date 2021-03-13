import React from 'react'
import { useHistory } from 'react-router-dom'

const TodoCard = ({ todo }) => {
  const { completed, id, title } = todo
  const history = useHistory()

  return (
    <div
      style={{
        backgroundColor: 'lightgray',
        margin: '10px',
        padding: '5px',
        width: '300px',
      }}
      onClick={() => history.push(`/todo/${id}`)}>
      <h3> {title} </h3>
      <h5> {`Completed: ${completed}`} </h5>
    </div>
  )
}

export default TodoCard
