import styled from 'styled-components';
import bgGreenier from '../../assets/bg-greenier.jpeg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: start;
  justify-content: space-between;
  background-image: url(${bgGreenier});
  background-repeat: no-repeat;
  background-size: cover;

  img {
    width: 200px;
    margin: 35px;
  }
`;


export const Wrapper = styled.div`
  width: 550px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
`;

export const FormWrapper = styled.div`
  width: 400px;
`;

export const Form = styled.div`
  color: #2b2b2b;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  .title-form {
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
    gap: 24px;

    h1 {
      font-size: 28px;
    }
    p {
      font-size: 0.9rem;
      /* font-weight: 400; */
    }
    a {
      color: #000;
      font-weight: 400;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 7px;
    font-size: 0.9rem;
    /* color: #2b2b2b; */

    input {
      color: #2B2B2B;
      font-size: 0.9rem;
      width: 385px;
      height: 57px;
      padding: 10px;
      border: 0;
      border-radius: 8px;
      outline: none;
    }
  }

`;

