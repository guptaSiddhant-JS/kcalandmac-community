import { useReducer } from 'react';
import { useCallback } from 'react';
import Input from '../../../shared/components/FormElements/Inputs/Input';
import Button from '../../../shared/components/FormElements/Button/Button'
import { VALIDATOR_REQUIRE } from '../../../shared/util/validators';
import './NewWorkout.css'
const formReducer = (state , action ) =>{
  switch(action.type){
    case'INPUT_CHANGE':
    let formIsValid = true;
    for(const inputId in state.inputs){
      if(inputId === action.inputId)
        formIsValid = formIsValid && action.isValid;
      else formIsValid = formIsValid && state.inputs[inputId].isValid;  
    }
         return {
           ...state,
           inputs:{
              ...state.inputs,
              [action.inputId]:{value : action.value , isValid: action.isValid}
           },
           isValid:formIsValid
         };
    default:
      return state;     
  }
}

const NewWorkout = props =>{
  const [formState , dispatch] = useReducer(formReducer , {
    inputs:{
      title:{
        value:'',
        isValid: false
      },
      description:{
        value:'',
        isValid: false
      }
    },
    isValid:false
  })
  const inputHandler = useCallback((id , value , isValid) => {
  dispatch({
    type:'INPUT_CHANGE',
    value:value,
    isValid:isValid,
    inputId:id
  });
  } , []);
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