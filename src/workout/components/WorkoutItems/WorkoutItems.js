import Card from '../../../shared/Uielements/Card/Card'
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
              <button>Edit</button>
              <button>Delete</button>
          </div>
      </Card> 

  </li>
  </>
}
export default WorkoutItems;