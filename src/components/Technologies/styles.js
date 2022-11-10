import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #131316;
  padding: 30px;

  > h2 {
    color: #9031E6;
    margin-bottom: 30px;
  }

  > h2 #icon {
    margin-right: 10px;
  }
`;

export const ContainerStacks = styled.div`
  width: 500px;  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const Card = styled.div`
  margin-bottom: 10px;

  width: 150px;
  height: 150px;
  border: solid 1px #3C3C3C;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px;
  
  > img {
    width: 60px;
  }

  > h3 {
    color: #A1A1A1;
    font-size: 25px;
  }

  @media only screen and (max-width: 500px) {
    width: 90px;
    height: 90px;
  
  > img {
    width: 50px;
  }

  > h3 {
    font-size: 17px;
  }
  }
`;