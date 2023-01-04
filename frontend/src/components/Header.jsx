import React,{useState} from "react";

import { Link } from "react-router-dom";

const Header = () => {
  //  const [toggle, setToggle] = useState(false);
  //  //toggle == false
  // const clickedToggle = (toggle) => {
  //    setToggle((prev) => !prev);
  // };


  // const cyberUserLogin = useSelector((state) => state.cyberUserLogin);
  // const {cyberUserInfo} = cyberUserLogin;
  return  <header className="header">

    <div className="header__wrap">
    <Link to="/" className="header__logo">Cyber Shop</Link>

        <div className="header__right">
            <Link to="/cart"><i className="bx bx-cart-alt"></i>Cart</Link>
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

            <label htmlFor="navi-toggle" className="toggle-button">
                    <Link to="/login">Sign in</Link>
                    <i className='bx bxs-down-arrow'></i>
            </label>
            <nav className="nav">
                <ul className="nav__links">
                  <li className="nav__links__list"><Link to="/register">register</Link></li>
                </ul>
              </nav>  

      
        

          </div>


    </div>


  </header>
  
}

export default Header;
