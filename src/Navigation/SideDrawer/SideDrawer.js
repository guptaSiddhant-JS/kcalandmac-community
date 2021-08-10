import React from 'react';
import ReactDom from 'react-dom';

import './SideDrawer.css';

const SideDrawer = props => {
 const dwawer = <aside className="side-drawer">{props.children}</aside>;
 return ReactDom.createPortal(dwawer , document.getElementById('slider-hook'));
};

export default SideDrawer;