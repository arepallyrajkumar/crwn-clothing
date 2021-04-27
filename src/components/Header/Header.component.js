import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assests/crown.svg';

import './Header.component.styles.scss';

const Header = ()=>(
    <div className="header">

    <Link to='/'>
    
    <Logo className="logo" />
        
    </Link>
    <div className="options">
        <Link className="option" to='/shop'>
            SHOP
        </Link>
        <Link className="option" to='/SHOP'>
           CONTACT 
        </Link>
    </div>

    </div>
)

export default Header;
