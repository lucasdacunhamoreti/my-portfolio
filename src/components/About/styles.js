import styled from 'styled-components';

export const Container = styled.section`
  height: 450px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1C1C21;

  #container-logos {
    height: 200px;
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  #logoLinkedin, #logoGithub {
    width: 30px;
    height: 30px;
    opacity: 60%;
    color: #9D9D9D;
  }

  > img {
    width: 240px;
    margin-left: 40px;
  }

  @media only screen and (max-width: 700px) {
    justify-content: center;
    height: 100%;
    flex-direction: column;

    #container-logos {
      flex-direction: row;
      width: 30vw;
      height: 100px;
    }

    > img {
      margin-left: 0;
      padding: 25px;
      width: 250px;
    }
  }
`;


export const Description = styled.div`
  width: 90%;
  text-align: justify;
  color: #B8B8B8;
  margin-left: 60px;
  max-width: 700px;

  > h2 {
    font-size: 30px;
  }

  > h4 {
    font-size: 16px;
    color: #9031E6;
  }

  > p {
    margin-top: 40px;
  }

  @media only screen and (max-width: 700px) {
    margin-left: 0;
    
    > h2 {
      margin-top: 40px;
    }

    > p {
      margin-top: 30px;
    }
  }
`;