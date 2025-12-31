import React from 'react';
import './App.css';
import HabitList from './components/HabitList';
import AddHabitForm from './components/AddHabitForm';
import HabitCard from './components/HabitCard';

function App() {
  return (
    <div className="App">
      <AddHabitForm />
      <HabitCard />
      <HabitList />
    </div>
  );
}

export default App;
