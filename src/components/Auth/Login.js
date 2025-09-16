import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post("/login", form);
      if (res.data.status === "success") {
        login(res.data.user, res.data.token);
        toast.success("¡Bienvenido!");
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Credenciales incorrectas");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Iniciar sesión</h2>
      <input name="email" type="email" placeholder="Correo" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} required />
      <button type="submit">Entrar</button>
      <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
    </form>
  );
}

export default Login;