import './App.css'
import { useReducer, useState } from 'react'

const reducer = (state, action) => {
  console.log('*********', state);
  console.log('$$$$$$$$$', action);
  switch (action.type) {
    case 'add':
      return [...state, { text: action.payload, completed: false }]
    case 'delete':
      return state.filter((item, index) => index !== action.payload)
  }
}


function App() {
  const [todo, setTodo] = useState('')
  // const [todos, setTodos] = useState([])
  const [state, dispatch] = useReducer(reducer, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'add', payload: todo })
    setTodo('')
  }
  const handleDelete = (index) => {
    dispatch({ type: 'delete', payload: index })
  }

  return (
    <>
      <h1>Todos With UseReducer</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
        <button>Add</button>
      </form>
      {
        state.map((item, index) => {
          return <div key={index}>
            - {item.text}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        }
        )
      }
    </>
  )
}

export default App
