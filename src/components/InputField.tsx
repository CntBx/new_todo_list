import { NavLink } from "react-router-dom";

const InputField = ({text, handleInput, handleSubmit}) => {
    return (
        <div className="flex justify-center gap-6">
            <input className="border-green-900 border-2" type="text" value={text} onChange={(e) => handleSubmit(e.currentTarget.value)} />
            <button onClick={handleInput}>Clicking</button>

            <NavLink className="absolute mt-[700px]" to="/">Обратно</NavLink>
        </div>
    )
}

export default InputField