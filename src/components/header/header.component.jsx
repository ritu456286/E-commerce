import React from "react";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../features/user/userSelector";
import { selectCartHidden } from "../../features/cart/cartSelectors";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { HeaderContainer, OptionsContainer,LogoContainer, OptionLink } from "./header.styles";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  return(
  <HeaderContainer>
    <LogoContainer to="/" >
      <Logo />
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/contact">
        CONTACT
      </OptionLink>
      {
        currentUser ? 
        <OptionLink as='div' onClick={() => auth.signOut()}> 
        SIGN OUT
        </OptionLink>
        :
        (<OptionLink to="/signin">
        SIGN IN
      </OptionLink>)
      }
      <CartIcon />  
    </OptionsContainer>
    {hidden ? null : <CartDropdown />} 
  </HeaderContainer>
  );
};

export default Header;
