import Input from '../../../shared/components/FormElements/Inputs/Input';
import { VALIDATOR_REQUIRE } from '../../../shared/util/validators';
import './NewWorkout.css'
const NewWorkout = props =>{
  return (
      <form className='workout-form'>
          <Input 
            element='input' 
            type='text' 
            label='Title'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a valid title' />
      </form>
  );
}
export default NewWorkout;