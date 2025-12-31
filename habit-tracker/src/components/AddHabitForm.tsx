import { useState } from "react";

type Habit = {
    id: string,
    title: string,
    completed: boolean
}

const AddHabitForm = () => {
    const [state, setState] = useState<string>('')
    const [habitList, setHabitList] = useState<Habit[]>([])
    const submitHandler = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        setHabitList((prev)=> [...prev, { id: crypto.randomUUID(), title: state, completed: false}]);
        setState("")
    }
    return ( 
        <>
        <form onSubmit={submitHandler}>
            <input type ="text" value={state} onChange={(e)=> setState(e.target.value)}/>
            <button type="submit">Add Habit</button>
        </form>

        <div>{habitList.map((item)=> <div key={item.id}>
        <div>{item.title}</div>
        <div>{item.completed ? 'Done' : 'To Do'}</div></div>)}</div>
        </>
     );
}
 
export default AddHabitForm;