interface AddHabitFormProps {
    habit: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>)=> void
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}


const AddHabitForm = ({handleChange, handleSubmit, habit}: AddHabitFormProps) => {
    return ( 
        <>
        <form onSubmit={handleSubmit}>
            <input type ="text" value={habit} onChange={handleChange}/>
            <button type="submit">Add Habit</button>
        </form>

        </>
     );
}
 
export default AddHabitForm;