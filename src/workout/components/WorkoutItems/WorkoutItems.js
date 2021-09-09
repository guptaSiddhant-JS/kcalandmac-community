import Card from '../../../shared/Uielements/Card/Card'
import Button from '../../../shared/components/FormElements/Button/Button'
import './WorkoutItems.css'
const WorkoutItems = props =>{
  return <>
  <li className='workout-item'>
      <Card className='workout-item__content'>
          {/* <div className='workout-item__image'>
              <img src={props.image} atl={props.title}/>
          </div> */}
          <div className='workout-item__info'>
              <h2>{props.title}</h2>
              <h3>{props.plan}</h3>
          </div>
          <div className='workout-item__actions'>
              <Button to={`/workout/${props.id}`} inverse >Edit</Button>
              <Button danger>Delete</Button>
          </div>
      </Card> 

  </li>
  </>
}
export default WorkoutItems;