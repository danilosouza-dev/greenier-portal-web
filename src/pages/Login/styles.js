import styled from 'styled-components';
import bgGreenier from '../../assets/bg-greenier.jpeg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: start;
  justify-content: right;
  background: url(${bgGreenier}) no-repeat center center fixed;
  background-size: cover;
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
<<<<<<< HEAD
  width: 90%;
=======
  width: 400px;
>>>>>>> origin
  display: inherit;
  flex-direction: column;
  align-items: inherit;

  img {
      width: 200px;
      margin-bottom: 70px;
    }

  .title-form {
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
    gap: 10px;
    margin-bottom: 70px;

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 0.9rem;
    }

    a {
      color: #000;
      font-weight: 400;
    }
  }
`;

<<<<<<< HEAD
export const Form = styled.form`
  width: 100%;
  color: #2b2b2b;
  display: flex;
  flex-direction: column;
  align-items: center;
=======
export const Form = styled.div`
  color: #2b2b2b;
  display: flex;
  flex-direction: column;
  align-items: left;
>>>>>>> origin
  gap: 25px;

  .label-form {
    display: flex;
    flex-direction: column;
    gap: 7px;
    font-size: 0.9rem;

    .input-form {
<<<<<<< HEAD
      width: 90%;
=======
>>>>>>> origin
      color: #2B2B2B;
      font-size: 0.9rem;
      height: 50px;
      padding: 10px;
      border: 0;
      border-radius: 8px;
      outline: none;
    }
  }

  .container-checkbox {
    display: flex;
    text-align: left;
    font-size: 0.9rem;
<<<<<<< HEAD
    cursor: pointer;
=======
>>>>>>> origin
  }

  .input-checkbox {
    height: 1rem;
    width: 1rem;
    background-color: #eee;
    border: 1px solid white;
    outline: none;
    border-radius: 2px;
    margin-right: 8px;
<<<<<<< HEAD
    cursor: pointer;
  }
=======
  }

  button {
    font-size: 1rem;
    font-weight: 700;
    color: #FFF;
    background-color: #0C9439;
    width: 385px;
    height: 56px;
    border: 0;
    border-radius: 8px;
    transition: 0.3s;
  }
  button:hover {
    background-color: #1E7A3D;
  }
`;
>>>>>>> origin

  button[type="submit"] {
    font-size: 1rem;
    font-weight: 700;
    color: #FFF;
    background-color: #0C9439;
    width: 385px;
    height: 56px;
    border: 0;
    border-radius: 8px;
    transition: 0.3s;
  }
  button[type="submit"]:hover {
    background-color: #1E7A3D;
  }
  span.error-password, span.error-email {
    position: absolute;
    margin-left: 50px;
    color: red;
  }
`;
