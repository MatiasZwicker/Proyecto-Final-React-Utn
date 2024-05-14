import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../assets/firebase";

  
export default function Registrarse() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user.email;
        console.log(user);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.error(errorCode);
        console.error(errorMessage);
      });
  };
  return (
    <div  className="form "> 
      <h2 className="tit-form">Registrarse</h2>
      <form className="form-int" onSubmit={handleSubmit}>
      <label className="etique">
          Nombre:
          <input className="inp"
            type="text"
            placeholder="Nombre..."
            name="nombre"
          />
        </label>
        <label className="etique">
          Apeliido:
          <input className="inp"
            type="text"
            placeholder="Apellido..."
            name="apellido"
          />
        </label>
        <label className="etique">
          Email:
          <input className="inp" type="text" placeholder="janeDoe@mail.com" name="email" />
        </label>
        <label className="etique">
          Contraseña:
          <input className="inp"
            type="password"
            placeholder="Introduzca su contraseña..."
            name="password"
          />
        </label>
        
        <button type="submit">Registrarse</button>
      </form>
      
    </div>
      
  );
}

