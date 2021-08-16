import WorkoutList from '../../components/WorkoutList/WorkoutList';
import './UserWorkout.css'

const DUMMY_DATA = [
    {
        id:'w1',
        title:'Leg Day',
        plan:'squats',
        creator:'c1'
    }
]
const UserWorkout = props =>{
  return <WorkoutList items={DUMMY_DATA} />
}
export default UserWorkout;