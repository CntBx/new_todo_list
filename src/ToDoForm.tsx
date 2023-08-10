import { useState } from 'react'

interface IEvent {
    addTask: (value: string) => void
}

export function ToDoForm({ addTask }: IEvent) {

    const [userInput, setUserInput] = useState("")


    const handleChange = (e: any) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handleKeyPress = (e: any) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <form className='flex justify-center m-5 mr-20' onSubmit={handleSubmit}>
            <input className='border-blue-500 border-2 mr-5'
                value={userInput}
                type='text'
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder='Введите значение'
            />
            <button className='bg-amber-500 hover:bg-emerald-500 text-white rounded w-[100px]'>Сохранить</button>
        </form>
    )
}