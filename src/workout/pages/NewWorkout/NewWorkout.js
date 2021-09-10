
import Input from '../../../shared/components/FormElements/Inputs/Input';
import Button from '../../../shared/components/FormElements/Button/Button'
import { VALIDATOR_REQUIRE } from '../../../shared/util/validators';
import './NewWorkout.css'
import useForm from '../../../hooks/form-hook';


const NewWorkout = props =>{
  const [formState , inputHandler] = useForm(
   {
      title:{
        value:'',
        isValid: false
      },
      description:{
        value:'',
        isValid: false
      }
    },
  false
  )
  const workoutSubmitHandler = event =>{
    event.preventDefault();
    console.log(formState.inputs); //send this to back end
  }
  return (
      <form className='workout-form' onSubmit={workoutSubmitHandler}>
          <Input 
            id='date'
            element='input' 
            type='text' 
            label='Date'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a valid title'
            onInput={inputHandler} />

          <Input 
            id='title'
            element='input' 
            type='text' 
            label='Title'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a valid title'
            onInput={inputHandler} />

            <Input 
            id='plan'
            element='textarea' 
            label='plan'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a valid title'
            onInput={inputHandler} />
            <Button type='submit' disabled={!formState.isValid}>
              Add Workout 
            </Button>
      </form>
  );
}
export default NewWorkout;