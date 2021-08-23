import { useParams } from 'react-router-dom';
import WorkoutList from '../../components/WorkoutList/WorkoutList';
import './UserWorkout.css'

const DUMMY_DATA = [
    {
        id:'w1',
        title:'Leg Day',
        plan:'squats',
        creator:'u1'
    },
    {
      id:'w2',
      title:'Back Day',
      plan:'deadlift',
      creator:'u4'
  }
]
const UserWorkout = props =>{
  const userId = useParams().userId;
  const loadedWorkout = DUMMY_DATA.filter(workout => workout.creator === userId)
  return <WorkoutList items={loadedWorkout} />
}
export default UserWorkout;