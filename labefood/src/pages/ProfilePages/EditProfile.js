import React from "react";
import EditPerfil from "./EditForml";
import Arrow from "../../components/Arrow/Arrow";
import {Geral, Perfil} from "./styles";
import {goToProfile} from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
 


const EditProfile = () => {
  const navegate = useNavigate();

    return (
      <Geral>
           <Arrow onClick={()=> goToProfile(navegate)}/>
        <Perfil>
        <EditPerfil />
        </Perfil>
      </Geral>
    );
}
export default EditProfile;