import React, { useState, useEffect } from 'react';
import { Nav, RightPart, NavMenu, Cart, HamBurgerIcon, HamBurgerIconContainer, NavLinkItem, Logo, Close, Flex, Title } from '../components/styles/HeaderStyle';
import { Button } from '../components/styles/Button';
import axios from "axios";


const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [image, setImage] = useState('');
  

  useEffect(() => {

    const unsubscribe = async () => {
      const result = await axios({
        method: "get",
        url: "https://pepper-api.onrender.com/admin/details",
        headers: {
          Accept: "application/json, form-data",
        },
      });
      console.log(result.data);
      setImage(result.data.details.image);
    };
    unsubscribe();

  }, [])


  const handleclose = () => {
    setIsToggle(!isToggle);
  }

  const URL = image? image : "./images/headerLogo.png";

  return (
    <>
      <Nav isToggle={isToggle}>
        <Flex>
          {/* <Logo src="./images/headerLogo.svg" alt="" /> */}
          <Logo src={URL} alt="" />
          <Title>Pepper</Title>
        </Flex>

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
