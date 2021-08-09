import { BrowserRouter, Route } from "react-router-dom";
import User from "./users/pages/User";


const App = () => {
  return (
    <BrowserRouter >
        <Route path='/'>
            <User />
        </Route>
    </BrowserRouter>
  );
}

export default App;
