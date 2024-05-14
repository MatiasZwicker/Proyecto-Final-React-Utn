import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../assets/firebase";
import "../style/InicioSesion.css";

export default function InicioSesion({ setUser }) {
    const [error, setError] = useState(null);
    const handleSubmit = (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          setUser(userCredential.user.email);
          setError(null);
        })
        .catch((err) => {
          const errorCode = err.code;
          const errorMessage = err.message;
          console.error(errorCode);
          setError("Invalid email or password");
        });
    };
    return (
        <div className="form init">

            <h2 className="tit-form"> Iniciar Sesión </h2>
            <form className="form-int" onSubmit={handleSubmit}>
                <label className="etique">
                    Email:
                    <input className="inp" type="text" placeholder="janeDoe@mail.com" name="email" />
                </label>
                <label className="etique">
                    Contraseña:
                    <input className="inp"
                        type="password"
                        placeholder="contraseña..."
                        name="password"
                    />
                </label>
                <p style={{ color: "tomato" }}>El mail o la contraseña son incorrectos.</p>
                <button type="submit">Signup</button>
            </form>

        </div>

    )

}