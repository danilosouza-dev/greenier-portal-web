import styled from 'styled-components'


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
`;

export const Wrapper = styled.div`
  width: 90vw;
  height: 95vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 20px;
  margin-left: 50px;

  .grid1 {
    padding-right: 5px;
    background-color: #FFF;  
    border-radius: 8px;
    overflow-y: hidden;
    grid-column: 1;
    grid-row: 1 / 2;
    box-shadow: 0px 3px 6px #00000029;
  }

  .cgT {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 20px;
  }
  
  .grid2 {
    padding: 20px;
    grid-row: 1/4;    
    background-color: #FFF;
    border-radius: 8px;
    box-shadow: 0px 3px 6px #00000029;
  }

  .grid3 {
    padding: 20px;
    grid-row: 4/6;
    background-color: #FFF;
    border-radius: 8px;
    box-shadow: 0px 3px 6px #00000029;
  }
`;

//////  Cabeçalho Pontos de vendas //////

export const ContainerHeader = styled.div`
  letter-spacing: 1px;
  padding: 25px 0 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  & h3 {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--title-grey);
    }

    & p {
      font-size: 0.8rem;
      color: var(--subtitle-grey);
    }
  .grid-1-menu {
    display: flex;

     button {
      color: #0C9439;
      letter-spacing: 0.5px;
      font-weight: normal;
      padding: 0 15px;
      display: flex;
      align-items: center;
      background-color: #FFF;
      border: 2px solid #0C9439;
      border-radius: 6px;
      cursor: pointer;
      margin-right: 15px;
      transition: all 0.2s;

      img {
        margin-right: 5px;
        transition: all 0.2s;
      }
      
    }
    button:hover {
      background-color: #0C9439;
      color: #FFF;
      img {
        filter: brightness(0) saturate(100%) invert(100%) sepia(92%) saturate(0%) hue-rotate(227deg) brightness(105%) contrast(110%);
      }
    }

    img {
      cursor: pointer;
      transition: all 0.2s;
    }
    img:hover {
      filter: var(--grey-hover-filter);
    }

  }
`;


export const ContainerGrid1Body = styled.div`
    padding: 0 5px 0 25px;
    overflow-y: scroll;
    width: 100%;
    max-height: 70vh;

  .grd-1-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: #F3F5F7;
    }

    .item {
      display: flex;
      align-items: center;

      img {
        background-color: #F3F5F7;
        padding: 5px;
        margin-right: 20px;
        border-radius: 8px;
      }

      p {
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--subtitle-grey);
      }
    }

    .item-icons {
      display: flex;
      align-items: center;
      padding-right: 10px;

      & > img {
        width: 20px;
        filter: var(--grey-default-filter);
        transition: all 0.2s;
      }

      .icon-info {
        margin-right: 20px;
      }


      .icon-info:hover, .icon-pontos:hover {
        filter: var(--grey-hover-filter);
      }

    }

  }

`;