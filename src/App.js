import { BrowserRouter, Route } from "react-router-dom";
import MainNavigation from "./Navigation/MainNavigation/MainNavigation";
import User from "./users/pages/User";


const App = () => {
  return (
    
    <BrowserRouter >
    <MainNavigation />
      <main>
        <Route path='/'>
            <User />
        </Route>
      </main>
    </BrowserRouter>
  );
}

export default App;
