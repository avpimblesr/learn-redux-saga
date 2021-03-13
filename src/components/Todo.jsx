import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

const Todo = () => {
  const { id } = useParams()
  const [todoDetails, setTodoDetails] = useState()

  // Load the data only when the component first mounts. This is achieved by
  // leaving a blank array as the second parameter of this useEffect().
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const responseTodo = res.data
        setTodoDetails(responseTodo)
      })
  }, [])

  //  On first render we may get a blank object. Set out variables to
  //  the spread of an empty object in order to avoid a screen eror
  const { id: todoId, userId, title, completed } = todoDetails || {}
  return (
    <div>
      {todoDetails ? (
        <div>
          <h1>{`Todo title: ${title}`}</h1>
          <h3>{`Todo id: ${todoId}`}</h3>
          <h3>{`Todo userId: ${userId}`}</h3>
          <h3>{`Todo completed: ${completed}`}</h3>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}

export default Todo
