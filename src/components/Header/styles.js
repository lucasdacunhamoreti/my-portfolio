import styled from 'styled-components';

export const Container = styled.header`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #26262C;

  > svg {
    display: none;
    
    color: white;
    opacity: 50%;
    width: 30px;
    margin-left: 10px;
    cursor: pointer;
  }
  
  @media only screen and (max-width: 500px) {
    > svg {
      display: block;
      cursor: pointer;
    }
    justify-content: flex-start;
  }
`;

export const NavBar = styled.header`
  width: 1200px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > a h5:hover {
    color: #9031E6;
    cursor: pointer;
  }

  > a {
    text-decoration: none;
    color: #8C8C8C;
  }

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;