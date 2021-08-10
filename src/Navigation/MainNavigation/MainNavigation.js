import { useState } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from '../MainHeader/MainHeader';
import NavLinks from '../NavLink/NavLinks';
import Backdrop from '../../shared/Uielements/Backdrop/Backdrop';
import SideDrawer from '../SideDrawer/SideDrawer'
import './MainNavigation.css'

const MainNavigation = props =>{
    const [drawerIsOpen , setDrawerIsOpen] = useState(false);
    const openTheDrawer = () =>{
      setDrawerIsOpen(true);
    }
    
    const closeTheDrawer = () =>{
        setDrawerIsOpen(false);
    }

    return (
    <>
    {drawerIsOpen && <Backdrop  onClick={closeTheDrawer} />}
    {drawerIsOpen && 
    <SideDrawer>
         <nav className='main-navigation__drawer-nav '>
           <NavLinks />
         </nav>
    </SideDrawer>}
    <MainHeader >
        <button className='main-navigation__menu-btn' onClick={openTheDrawer}>
            <span />
            <span />
            <span />
        </button>
        <h1 className='main-navigation__title'>
            <Link to='/'>Kcal & Mac</Link>
        </h1>
        <nav className='main-navigation__header-nav '>
         <NavLinks />
        </nav>
    </MainHeader>
    </>);
}
export default MainNavigation;
