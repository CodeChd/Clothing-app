import {Outlet, Link} from 'react-router-dom'
import { Fragment } from "react";
import {ReactComponent as Logo} from '../../components/assets/crown.svg'
import './navigation.scss'
 

function Navigation () {
  return (
    <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <Logo className='Logo'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                <Link className='nav-link' to='/sign-in'>
                SIGN IN
          </Link>
            </div>
        </div>
        <Outlet/>
    </Fragment>
  )
}

export default Navigation;