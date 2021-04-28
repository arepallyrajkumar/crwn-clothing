import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assests/crown.svg';
import {auth} from '../../firebase/firebase.util'
import './Header.component.styles.scss';

const Header = ({currentUser})=>(
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
        {
            currentUser ?
            <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to ='/SignIn'>SIGN IN</Link>
        }
    </div>

    </div>
)

export default Header;
