import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #26262C;
  padding: 20px;
`;

export const LinksNavigation = styled.div`
  color: white;

  display: flex;
  justify-content: space-around;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  >  div h2 {
    margin-bottom: 20px;
    font-size: 20px;
    color: #9031E6;
  }

  > div h4 {
    font-size: 17px;
  }

  > div a {
    text-decoration: none;
    color: white;
    cursor: pointer;
  }
  
  > div a:hover {
    color: #FDED98;
  }

  @media only screen and (max-width: 700px) {
    flex-wrap: wrap;

    > div {
      text-align: center;
      padding: 10px;
    }

    > div h2 {
      font-size: 80%;
    }
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  align-items: center;
  color: white;
  text-shadow: 0 0 10px white;

`;

export const ContainerMain = styled.div`
  background-color: #9031E6;
`;