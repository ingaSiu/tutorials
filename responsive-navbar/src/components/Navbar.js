import {
  LeftContainer,
  Logo,
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  NavbarLinkExtended,
  OpenLinksButton,
  RightContainer,
} from './styles/Navbar.style';

import LogoImg from '../assets/logo.png';
import { useState } from 'react';

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>

        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/products">Products</NavbarLink>
            <NavbarLink to="/contact">Contact us</NavbarLink>
            <NavbarLink to="/about">About us</NavbarLink>
            <OpenLinksButton
              // we set the extended navbar to be opposite of that it is right now
              onClick={() => {
                setExtendNavbar((current) => !current);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>

        <RightContainer>
          <Logo src={LogoImg}></Logo>
        </RightContainer>

      </NavbarInnerContainer>
      
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/products">Products</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact">Contact us</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">About us</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};
export default Navbar;
