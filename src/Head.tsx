import { useState } from 'react'
import './App.css'
import { ToDoForm } from './ToDoForm'
import { ToDo } from './ToDo'
import { NavLink } from "react-router-dom";

interface IAddTask {
    id: string,
    task: string,
    complete: boolean
}

export function Head() {

    const [todos, setTodos] = useState<IAddTask[]>([])
    const addTask = (userInput: string): void => {
        if (userInput) {
            const newItem: IAddTask = {
                id: Math.random().toString(36).substring(2, 9),
                task: userInput,
                complete: false
            }
            console.log(newItem)
            setTodos([...todos, newItem])
        }

    }
    const removeTask = (id: string) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }
    const handleToggle = (id: string) => {
        setTodos([...todos.map(todo => todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo })])
    }

    return (
        <>
            <div className="">
                <header>
                    <p className="underline text-cyan-500 font-bold text-xl">Список задач: {todos.length}</p>
                </header>
                <ToDoForm addTask={addTask} />
                {todos.map(todo =>
                    <ToDo todo={todo} toggleTask={handleToggle} removeTask={removeTask} key={todo.id} />
                )}
                <div className="relative ">
                    <NavLink className="absolute mt-[500px]" to="/2">Переход</NavLink>
                </div>
            </div>
        </>
    )
}


