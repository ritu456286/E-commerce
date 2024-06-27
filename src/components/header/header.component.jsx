import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/user/userSelector";
import { selectCartHidden } from "../../features/cart/cartSelectors";


const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  return(
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {
        currentUser ? 
        <div className="option" onClick={() => auth.signOut()}> 
        SIGN OUT
        </div>
        :
        (<Link className="option" to="/signin">
        SIGN IN
      </Link>)
      }
      <CartIcon />  
    </div>
    {hidden ? null : <CartDropdown />} 
  </div>
  );
};




export default Header;
