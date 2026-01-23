import React, { useState } from "react";
import "./App.css";
import HabitList from "./components/HabitList";
import AddHabitForm from "./components/AddHabitForm";

export interface Habit {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [habit, setHabit] = useState<string>("");
  const [habitList, setHabitList] = useState<Habit[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHabit(event.target.value);
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHabitList((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title: habit, completed: false },
    ]);
    setHabit("");
  };

  return (
    <div className="App">
      <AddHabitForm
        handleChange={handleChange}
        handleSubmit={submitHandler}
        habit={habit}
      />
      
      <HabitList habitList={habitList} />
    </div>
  );
}

export default App;
