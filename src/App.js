import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import MainNavigation from "./Navigation/MainNavigation/MainNavigation";
import User from "./users/pages/User";
import NewWorkout from "./workout/pages/NewWorkout/NewWorkout";
import UpdateWorkout from "./workout/pages/UpdateWorkout/UpdateWorkout";
import UserWorkout from "./workout/pages/UserWorkout/UserWorkout";


const App = () => {
  return (
    
    <BrowserRouter >
    <MainNavigation />
      <main>
      <Switch>
        <Route path='/' exact>
            <User />
        </Route>
        <Route path='/:userId/profile' exact>
            <UserWorkout />
        </Route>
        <Route path='/workout/new' exact>
            <NewWorkout />
        </Route>
        <Route path='/workout/:workoutId' exact>
           <UpdateWorkout /> 
        </Route>
        <Redirect to='/'/>
      </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
