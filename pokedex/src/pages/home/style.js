import styled from "styled-components";
import fundoHome from "../../assets/img/pokemon2.jpg";

export const StyledHome = styled.div`
  overflow: scroll;
  height: 88vh;
  width: 100vw;
  background-image: url(${fundoHome});
  padding-left: 1rem;
 

  h1 {
    color: #fff;
    background-color: blue;
    display: flex;
    width: 50vw;
    border-radius: 30px;
    padding: 10px;
    padding-left: 50px;
  }

#pages{
  color: #fff;
  background-color: #000;
  font-size: 1.2rem;
  border-radius: 5px 5px; 

}
`