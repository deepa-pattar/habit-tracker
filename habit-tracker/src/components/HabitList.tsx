import HabitCard from "./HabitCard";
import { Habit } from '../App'

interface HabitListProps {
   habitList : Habit[]
}
const HabitList = ({ habitList }: HabitListProps) => {
    return ( 
        <div>
            {habitList.map((habit)=> <HabitCard habit={habit} />)}
        </div>

        
     );
}
 
export default HabitList;