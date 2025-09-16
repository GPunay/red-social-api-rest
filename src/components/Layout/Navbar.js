import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      <Link to="/">Inicio</Link>
      {user ? (
        <>
          <span>{user.nick}</span>
          <button onClick={logout}>Cerrar sesión</button>
        </>
      ) : (
        <>
          <Link to="/login">Entrar</Link>
          <Link to="/register">Registro</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;