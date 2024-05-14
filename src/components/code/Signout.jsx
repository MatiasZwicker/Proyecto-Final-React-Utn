import { auth } from "../../assets/firebase";

function Signout({ setUser }) {
  const signout = () => {
    auth
      .signOut()
      .then(() => setUser(null))
      .catch((err) => {
        console.error(err);
      });
  };
  return <button className="btn-cerrar-sesion" onClick={signout}>Cerrar Sesión</button>;
}

export default Signout;
