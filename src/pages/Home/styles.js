import styled from 'styled-components'


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  display: grid;
  justify-content: center;
  align-content: center;
`;

export const Wrapper = styled.div`
  width: 85vw;
  height: 85vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  .grid1 {
    padding: 20px;
    background-color: #FFF;  
    border-radius: 8px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
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
  }

  .grid3 {
    padding: 20px;
    grid-row: 4/6;
    background-color: #FFF;
    border-radius: 8px;
  }
`;
