import React, { useState } from "react";
import {
  Container,
  Button,
  Logo,
  SidebarContainer,
  SlideBar,
  Item,
  Text,
  Logout
} from "./styles";
import logoAvata from "../../assets/logo-avata.svg";
import iconHome from "../../assets/icon-home.svg";
import iconProduct from "../../assets/icon-product.svg";
import iconLocation from "../../assets/icon-location.svg";
import iconLogout from '../../assets/icon-logout.svg'

export function Sidebar() {
  const [click, setClick] = useState(false);
  const [profileClick, setProfileClick] = useState(false);

  function handleClick() {
    setClick(!click)
  }
  function handleMouseLeave() {
    setClick(false)
  }
  function handleMouseEnter() {
    if (click) {
      setClick(click)
    } else {
      setClick(!click)
    }
  }

  // const handleProfileClick = () => setProfileClick(!profileClick);

  return (
    <>
      <Container>
        <Button clicked={click} onClick={handleClick}>

        </Button>

        <SidebarContainer>
          <Logo>
            <img src={logoAvata} alt="logo" />
          </Logo>

          <SlideBar
            clicked={click}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          >
            <Item>
              <img src={iconHome} alt="" />
              <Text clicked={click}>início</Text>
            </Item>

            <Item>
              <img src={iconProduct} alt="" />
              <Text clicked={click}>Produto</Text>
            </Item>

            <Item>
              <img src={iconLocation} alt="" />
              <Text clicked={click}>Filial</Text>
            </Item>

          </SlideBar>

          {/* <Profile clicked={profileClick}>
            <img
              onClick={handleProfileClick}
              src="https://picsum.photos/200"
              alt="Imagem do perfil"
            />
            <Details clicked={profileClick}>
              <Name>
                <h4>Gustavo</h4>
                <a href="#">Ver perfil</a>
              </Name>

              <Logout>
                <img src={} alt="" />
              </Logout>
            </Details>
          </Profile> */}

          <Logout>
            <img src={iconLogout} alt="" />
          </Logout>
        </SidebarContainer>
      </Container>
    </>
  );
}
