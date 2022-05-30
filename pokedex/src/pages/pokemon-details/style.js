import styled from "styled-components";
import fundoPokedexDetails from "../../assets/img/pokemon2.jpg";

export const StylePokemonDetails = styled.div`
  overflow: scroll;
  height: 88vh;
  background-image: url(${fundoPokedexDetails});

  .card{
    width: 12rem;
    height: 12rem; 
    margin-left: 2rem;
    padding: 1rem;
    margin-top: 2rem;
  }
  .card:hover{
     transform: scale(1.05);
}
.image{
  height: 8rem;
}

.image-costas{
  height: 100%;
}

  .topo h1{
    display: flex;
    font-size: 3.5rem;
    padding: 5px;
    border-radius: 6px;
    border-top-right-radius:0;
    border-bottom-right-radius:0;
    justify-content:center;
    color: #000;
    background-color: #fff;
    font-family: 'Paytone One', sans-serif;
    text-transform: capitalize;
    margin-top: 1rem;

  }
  .topo h3{
    display: flex;
    font-size: 2rem;
    padding: 5px;
    border-radius: 6px;
    border-top-right-radius:0;
    border-bottom-right-radius:0;
    justify-content:center;
    color: #000;
    background-color: #fff;
    font-family: 'Paytone One', sans-serif;
    width: max-content;
    text-transform: capitalize;

  }
.button{
  display: flex;
  justify-content: center;
  margin-top: 1rem;

}
.card-detalhes{
  font-family: 'Paytone One', sans-serif;
  width: 20rem;
  height: 24rem;
  background-color:	#fff;
  color: black;
  margin-top: 1rem;
  font-size: 1.2rem;
}

.card-detalhes:hover{
  transform: scale(1.05);
}
h4{
  margin: 0.5rem 0 3rem 1rem;
}
p{
  margin-left: 1rem;
}
.container-button{
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.btn{
  height: 4rem;
  width: 14rem;
  margin-bottom: 1rem;
  font-family: 'Paytone One', sans-serif;
  font-size: 1.2rem;
}
small{
  color: red;
}
`

