import { NavLink } from 'react-router-dom'
import './NavLinks.css'
const NavLinks = props => {
  return(
       <ul className='nav-links'>
           <li>
               <NavLink to='/' exact>Usera</NavLink>
           </li>
           <li>
               <NavLink to='/u1/profile'>My Workout</NavLink>
           </li>
           <li>
               <NavLink to='/add/workout'>Add Workout</NavLink>
           </li>
           <li>
               <NavLink to='/auth'>Sign In</NavLink>
           </li>
       </ul>
  );
}
export default NavLinks;