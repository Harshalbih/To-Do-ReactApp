import React, { useState} from 'react'
import './App.css'

let globalID = 0

function App() {

    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])

    function createTodo(event) {
        event.preventDefault()
 
        setTodos(oldtodos => {
            setTask('')
            return [...oldtodos, { todo: task, id: globalID++ }]
        })
    }
    function deleteItem(itemID) { setTodos(oldTodo => oldTodo.filter(item => item.id !== itemID)); }

    return <div className='main-div'> 

        <h1>To Do App</h1>

        <form className='form-field' onSubmit={createTodo}>
            <input className='input-field'
                placeholder='Enter Task'
                type="text"
                value={task}
                onChange={event => {
                    setTask(event.target.value)
                }} />
            <button className='add-task' type="submit"> Add Task </button>
        </form>
        <div><h2>List of Tasks</h2></div>
        <ul className='list-task'>
            {todos.map((item, index) => {
                return <div className='task-ul' key={item.id}>
                    <li className='list-items'>{item.todo}</li>
                    <button className='delete-buttons' onClick={() => deleteItem(item.id)}>Delete</button>
                </div>
            })}
        </ul>
    </div>

}

export default App
