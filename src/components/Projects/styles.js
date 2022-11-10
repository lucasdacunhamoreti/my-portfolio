import styled from 'styled-components';

export const Container = styled.section`
  background-color: #1C1C21;
  padding: 30px;
  /* height: 900px; */
  width: 100%;
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    margin-bottom: 30px;
    color: #9031E6;
  }
  
 #banner {
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
 }

 .images-projects {
  width: 500px;
  height: 270px;
  border-radius: 8px;
  border: 1px solid white;
 }

 .content-projects {
  display: flex;
  flex-direction: column;
  align-items: center;
 }


 .content-projects h2 {
  color: white;
  margin-bottom: 20px;
 }

 .content-projects button {
  margin-top: 20px;
  background-color: #9031E6;
  border: none;
 }

 .carousel-control-prev, .carousel-control-next{
  width: 100px;
 }

 .projects-description {
  margin-left: 20px;
  font-size: 17px;
  color: whitesmoke;
  text-align: justify;
 }

 .icon-github-projects {
  width: 30px;
  height: 30px;
 }

  @media only screen and (max-width: 500px) {
    .images-projects {
      width: 90%;
      height: 90%;
    }
    height: 90%;
  }
`;