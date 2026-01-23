import { Habit } from "../App";

interface HabitCardProps {
    habit: Habit
}

const HabitCard = ({habit}: HabitCardProps) => {
  return (
    <div>
      <div>{habit.title}</div>
      <div><button>{habit.completed ? "Done" : "To Do"}</button></div>
      
    </div>
  );
};

export default HabitCard;
