import './WorkoutList.css'
import Card from '../../../shared/Uielements/Card/Card';
import WorkoutItems from '../WorkoutItems/WorkoutItems';
const WorkoutList = props =>{
    if(props.WorkoutItems.length === 0){
        return <div className='workout-list center'>
            <Card>
               <h1>No workout found .Maybe Create One</h1>
               <button>Add Workout </button>
            </Card>
        </div>
    }
    return <ul className='workout-list'>
         {props.WorkoutItems.map(workout => (
             <WorkoutItems
             key={workout.id}
             id={workout.id}
             image={workout.imageUrl}
             title={workout.title}
             creatorId={workout.creator}
             />
         ))}
    </ul>
}
export default WorkoutList;