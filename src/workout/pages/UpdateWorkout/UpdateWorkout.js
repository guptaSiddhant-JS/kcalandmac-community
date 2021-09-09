import React from 'react';
import { useParams } from 'react-router';
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
    if(!identifiedWorkout) return <h2>Could not find the Workout!</h2>
  return <form className='workout-form'>
      <Input 
            id='title'
            element='input' 
            type='text' 
            label='Title'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a valid title'
            onInput={() => {}} 
            value={identifiedWorkout.title}
            valid={false}/>

            <Input 
            id='plan'
            element='textarea' 
            label='Plan'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a valid title'
            onInput={() => {}}
            value={identifiedWorkout.plan}
            valid={false} />
            <Button type='submit' disabled={true}>
              Update Workout 
            </Button>
            
  </form>
}
export default UpdateWorkout;