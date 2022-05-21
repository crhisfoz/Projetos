import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToLogin } from './routes/coordinator';
import logo from './assets/logo.png'
import {
  InitialContainer 
} from './styles';


const App = () => {
  const navigate = useNavigate();

   useEffect(()=>{
    setTimeout(()=>{
      goToLogin(navigate)
    },3000)
  },[])
 
  return (<InitialContainer className='main-container'>
    <div >
      <img src={logo}/>
    </div>
    </InitialContainer>);
}

export default App;