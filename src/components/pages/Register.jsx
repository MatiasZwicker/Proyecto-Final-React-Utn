import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../assets/firebase";
import InicioSesion from "../code/InicioSesion";
import Registrarse from "../code/Registrarse";
import "../style/InicioSesion.css";
import Signout from "../code/Signout";
import Home from "../code/Home";
export default function Register() {
    const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
      }
    });
  }, []);

    return (
    <div>
        {!user ? (
            <>
              <Registrarse />
            
              <InicioSesion setUser={setUser} />
            </>
          ) : (
            <>
             <Home/>
              <Signout setUser={setUser} />
            </>
          )}
        
           

            

        </div>


    )
}