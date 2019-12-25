import React from 'react';
import '../header/header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utiles';

const Header = ({currentuser}) => (
 <div className='header'>
     <Link className='logo-container' to="/">
         <Logo className='logo'/>
     </Link>
     <div className ='options'>
         <Link className='option' to="/shop">
          SHOP
         </Link>
         <Link className='option' to="/shop">
          CONTACT
         </Link>
         <Link className='option' to="/signin">
          SIGNIN
         </Link>
          {
            currentuser?
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT
                </div>
            :
            <link className='option' to="/signin"></link>
          }
     </div>
    </div>
)

export default Header;