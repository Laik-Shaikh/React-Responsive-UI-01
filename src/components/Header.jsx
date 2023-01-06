import React, { useState } from 'react';
import { Nav, RightPart, NavMenu, Cart, HamBurgerIcon, HamBurgerIconContainer, NavLinkItem, Logo, Close } from '../components/styles/HeaderStyle';
import { Button } from '../components/styles/Button';



const Header = () => {
  const [isToggle, setIsToggle] = useState(false);


  const handleclose = () => {
    setIsToggle(!isToggle);
  }

  return (
    <>
      <Nav isToggle={isToggle}>
        <div>
          <Logo src="./images/headerLogo.svg" alt="" />
        </div>

        <div>
          <NavMenu>
            <NavLinkItem>
              <a href="#">About</a>
            </NavLinkItem>
            <NavLinkItem>
              <a href="#">Blog</a>
            </NavLinkItem>
            <NavLinkItem>
              <a href="#">Pricing</a>
            </NavLinkItem>
            <NavLinkItem>
              <a href="#">Careers</a>
            </NavLinkItem>
            <NavLinkItem>
              <a href="#">Contacts</a>
            </NavLinkItem>
          </NavMenu>
        </div>

        <RightPart>
          
            <img src="./images/Vector.svg" alt="" />
            <Cart href="#">Cart</Cart>
          
          <Button color='#9D0AFF' bg="transparent" borderColor="#9D0AFF" marginRight="1rem">Login</Button>
          <Button color='#fff' bg='#9D0AFF' borderColor="#9D0AFF" >Get Started</Button>
        </RightPart>

        
        
      </Nav>
      <HamBurgerIconContainer>
          <HamBurgerIcon isToggle={isToggle} onClick={() => setIsToggle(!isToggle)} />
          <Close isToggle={isToggle} onClick={() => handleclose()} />
      </HamBurgerIconContainer>
    </>
  );
};

export default Header;
