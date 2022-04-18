import styled from 'styled-components'

export const Container = styled.div`
  letter-spacing: 1px;
  /* padding: 25px 0 0 25px; */
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 50px;

  .container-title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  & h3 {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--title-grey);
    }

    /* & p {
      font-size: 0.8rem;
      color: var(--subtitle-grey);
    } */

    .container-buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .container-buttons > button {
      margin-right: 19PX;
    }

    .container-buttons button {
      color: #97A3B5;
      font-size: 0.8rem;
      background-color: transparent;
      border: 1px solid #97A3B5;
      border-radius: 24px;
      padding: 5px 8px;
      display: flex;
      align-items: center;
      transition: all 0.2s;
      &:hover {
        background-color: var(--background);
      }

      & img {
        margin-right: 5px;
        width: 15px;
      }
    }

`;
