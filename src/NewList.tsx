import { useState } from "react";
import { NavLink } from "react-router-dom";


interface IToDo {
    id: number,
    text: string,
    completed: boolean
}

export function NewList() {

    const [text, setText] = useState<string>("")
    const [todos, setTodos] = useState<IToDo[]>([])

    function changes(): void {
        if (text.trim().length) {
            setTodos([...todos, {
                id: Math.random(),
                text: text,
                completed: false
            }])
            setText("")
        }
    }

    function removeTodo(todoId: number): void {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    function toggleComplete(todoId: number): void {
        setTodos(todos.map(todo => {
            if (todo.id === todoId) {
                return { ...todo, completed: !todo.completed }
            } else {
                return todo
            }
        }))
    }

    return (
        <div>
            <div className="flex justify-center gap-6">
                <input className="border-green-900 border-2" type="text" value={text} onChange={(e) => setText(e.currentTarget.value)} />
                <button onClick={changes}>Clicking</button>

                <NavLink className="absolute mt-[700px]" to="/">Обратно</NavLink>
            </div>
            <div className="mt-7">{todos.map(todo =>
                <div className="flex justify-center gap-2" key={todo.id}>
                    <input className="cursor-pointer" type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
                    <span onClick={() => removeTodo(todo.id)} className="text-red-600 cursor-pointer">&times;</span>
                </div>)}
            </div>
        </div>
    )
}
