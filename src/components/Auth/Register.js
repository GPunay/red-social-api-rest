import { useState } from "react";
import { api } from "../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "", surname: "", nick: "", email: "", password: ""
  });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post("/register", form);
      if (res.data.status === "success") {
        toast.success("¡Registro exitoso! Ahora puedes iniciar sesión.");
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Error al registrar usuario");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Registro</h2>
      <input name="name" placeholder="Nombre" onChange={handleChange} required />
      <input name="surname" placeholder="Apellido" onChange={handleChange} />
      <input name="nick" placeholder="Nick" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Correo" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} required />
      <button type="submit">Registrarse</button>
      <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
    </form>
  );
}

export default Register;