import {useState} from "react";

export default function NewTask({onAdd}) {
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        onAdd(enteredTask);
        setEnteredTask('');
    }

    return <div className="flex items-center gap-4">
        <input value={enteredTask} onChange={handleChange} type="text" className="w-64 px-2 py-2 rounded-sm bg-stone-200"/>
        <button onClick={handleClick} className="text-stone-700">Add Task</button>
    </div>
}