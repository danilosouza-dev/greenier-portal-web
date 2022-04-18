import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;

  .active {
    border-right: 4px solid #fff;
  }
`;

export const SidebarContainer = styled.div` 
  background-color: #FFF;
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Logo = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #F3F5F7;
  border-radius: 50%;
  padding: 10px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const Button = styled.button`
  background-color: #FFF;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before, &::after {
    content: "";
    background-color: #000;
    height: 3px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease 0s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

export const SlideBar = styled.ul`
  width: ${(props) => (props.clicked ? "10rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
  color: #000;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem 0 0.5rem 0;
  background-color: #FFF;
  position: absolute;
  top: 6rem;
  left: 0;
  box-shadow: ${props => props.clicked ? "0px 3px 6px #00000029" : "0"};
`;

export const Item = styled.li`
  font-weight: 600;
  color: var(--subtitle-grey);
  width: 100%;
  padding: 0.5rem 0 0.5rem 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  /* padding-left: 1rem; */

  img {
    width: 1.7rem;
    height: auto;
    filter: var(--grey-default-filter);
    transition: all 0.3s ease 0s;
  }

  &:hover {
    border-right: 4px solid var(--green-hover);
    color: var(--green-hover);

    img {
      filter: var(--green-hover-filter);
    }
  } 
`;

export const Text = styled.span`
  font-size: 0.9rem;
  width: ${props => props.clicked ? "100%" : "0"};
  overflow: hidden;
  margin-left: ${props => props.clicked ? "1.5rem" : "0"};
  white-space: nowrap;
  transition: all 0.3s ease 0s;
`;

// export const Logo = styled.div`
//   width: 3rem;
//   height: 3rem;
//   background-color: #F3F5F7;
//   border-radius: 50%;
//   padding: 10px;

//   img {
//     width: 100%;
//     height: auto;
//   }
// `;

// export const Button = styled.button`
//   background-color: #FFF;
//   border: none;
//   width: 2.5rem;
//   height: 2.5rem;
//   border-radius: 50%;
//   margin: 0.5rem 0 0 0.5rem;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;

//   &::before, &::after {
//     content: "";
//     background-color: #000;
//     height: 3px;
//     width: 1rem;
//     position: absolute;
//     transition: all 0.3s ease 0s;
//   }
//   &::before {
//     top: ${(props) => (props.clicked ? "1.5" : "1rem")};
//     transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
//   }
//   &::after {
//     top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
//     transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
//   }
// `;

// export const Profile = styled.div`
//   width: ${props => props.clicked ? "14rem" : "3rem"};
//   height: 3rem;
//   /* padding: ${props => props.clicked ? "0.5rem 1rem" : "3px"}; */

//   padding: 0.5rem 1rem;
//   /* border: 2px solid #fff; */
//   border-radius: 20px;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-left: ${props => props.clicked ? "9rem" : "0"};

//   background-color: #000;
//   color: #fff;

//   transition: all 0.3s ease;

//   img {
//     width: 2.5rem;
//     height: 2.5rem;
//     border-radius: 50%;
//     cursor: pointer;

//     &:hover {
//       border: 2px solid gray;
//       padding: 2px;
//     }

//   }
// `;

// export const Details = styled.div`
//   display: ${props => props.clicked ? "flex" : "none"};
//   align-items: center;
//   justify-content: space-between;
// `;

// export const Name = styled.div`
//   padding: 0 1.5rem;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   h4 {
//     display: inline-block;
//   }
//   a {
//     font-size: 0.8rem;
//     text-decoration: none;
//     color: gray;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

export const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;

  img {
    width: 100%;
    height: auto;
    filter: var(grey-default-filter);
    transition: all 0.3s ease 0s;

    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;