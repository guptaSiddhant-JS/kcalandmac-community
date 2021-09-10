import React from 'react';
import { useParams } from 'react-router';
import useForm from '../../../hooks/form-hook'
import Button from '../../../shared/components/FormElements/Button/Button';
import Input from '../../../shared/components/FormElements/Inputs/Input';
import { VALIDATOR_REQUIRE } from '../../../shared/util/validators';
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
const UpdateWorkout = props =>{
    const workoutId = useParams().workoutId;
    const identifiedWorkout = DUMMY_DATA.find(w => w.id === workoutId);
    const [formState , inputHandler] = useForm(
      {
        title:{
          value:identifiedWorkout.title,
          isValid: true
        },
        plan:{
          value:identifiedWorkout.plan,
          isValid: true
        }
      },
    true
    );
    const workoutUpdateSubmitHandler = event =>{
      event.preventDefault();
      console.log(formState.inputs);
    }
    if(!identifiedWorkout) return <h2>Could not find the Workout!</h2>
  return <form className='workout-form' onSubmit={workoutUpdateSubmitHandler} >
      <Input 
            id='title'
            element='input' 
            type='text' 
            label='Title'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a valid title'
            onInput={inputHandler} 
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}/>

            <Input 
            id='plan'
            element='textarea' 
            label='Plan'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a valid title'
            onInput={inputHandler}
            initialValue={formState.inputs.plan.value}
            initialValid={formState.inputs.plan.isValid} />
            <Button type='submit' disabled={!formState.isValid}>
              Update Workout 
            </Button>
            
  </form>
}
export default UpdateWorkout;