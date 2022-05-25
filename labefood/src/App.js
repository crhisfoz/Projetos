import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToLogin } from './routes/coordinator';
import ifuture from './assets/ifuture-image.png'


import {
  InitialContainer 
} from './styles';

const App = () => {
  const navegate = useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
      goToLogin(navegate)
    },3000)
  },[])

  return (<InitialContainer className='main-container'>
    <div className='main'>
      <img src={ifuture} alt='logo ifuture em vermelho'/>
    </div>
    </InitialContainer>);
}

export default App;