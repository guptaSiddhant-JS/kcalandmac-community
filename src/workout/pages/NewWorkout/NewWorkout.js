import Input from '../../../shared/components/FormElements/Inputs/Input';
import './NewWorkout.css'
const NewWorkout = props =>{
  return (
      <form className='workout-form'>
          <Input element='input' type='text' label='Title' />
      </form>
  );
}
export default NewWorkout;