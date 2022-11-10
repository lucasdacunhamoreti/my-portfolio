import styled from 'styled-components';

export const Container = styled.section`
  background-color: #131316;
  height: 470px;

  display: flex;
  justify-content: center;
  align-items: center;

  > form {
    width: 400px;

    display: flex;
    flex-direction: column;
  }

  > form input {
    margin-bottom: 10px;
  }

  > form textarea {
    margin-bottom: 10px;
    resize: none;
  }

  > form button {
    background-color: #9031E6;
    color: whitesmoke;
    font-weight: 500;
    border-radius: 4px;
    border: solid 1px white;
  }

  > form button:hover {
    color: whitesmoke;
    box-shadow: 0 0 18px #9031E6;
    background-color: #9031E6;
    border: solid 1px white;
  }

  > form h2 {
    color: #DCDCDC;
  }

  #logo-email {
    color: #DCDCDC;
    margin-right: 10px;
  }

  @media only screen and (max-width: 700px) {
    padding: 20px;
    margin: 0 auto;

    #sideBar {
      width: 30px;
      height: 30px;
    }
  }
`;
