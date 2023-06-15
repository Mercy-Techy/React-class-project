import { Outlet,Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg' 

import './navigation.styles.scss'

const Navigation = () => {
  // fragment is useful when you dont want to use an html or render an html u can use fragment as a tag it wont render on the dom as a tag. link is just like anchor tag
    return (
      <Fragment>
        <div className="navigation"> 
        <div>
          <Link className="logo-container" to='/'>
            <CrwnLogo className="logo"/>
          </Link>
        </div>
          <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>Shop</Link>
          </div>
          <div className="nav-links-container">
          <Link className="nav-link" to='/sign-in'>Sign In</Link>
          </div>
      </div>
        <Outlet />
      </Fragment>
    );
  };

export default Navigation