interface IToDoProps {
    todo: IAddTask,
    toggleTask: (id: string) => void,
    removeTask: (id: string) => void
}

interface IAddTask {
    id: string,
    task: string,
    complete: boolean
}

export function ToDo({ todo, toggleTask, removeTask }: IToDoProps): JSX.Element {
    return (
        <div className="flex justify-center gap-[200px] ml-[400px]  mr-[400px] min-w-[300px] border-y-pink-600 border-x-zinc-800 border-2 " key={todo.id}>
            <div className="" onClick={() => toggleTask(todo.id)}>{todo.task}</div>
            <div onClick={() => removeTask(todo.id)}>X</div>
        </div>
    )
}