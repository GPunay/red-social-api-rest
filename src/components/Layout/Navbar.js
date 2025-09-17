import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaHome, FaSignInAlt, FaUserPlus, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import "../../styles/navbar.css";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-logo">
          <FaHome size={22} /> <span>Inicio</span>
        </Link>
      </div>

      <div className="navbar-right">
        {user ? (
          <>
            <span className="nav-user">
              <FaUserCircle size={22} /> {user.nick}
            </span>
            <button className="nav-btn" onClick={logout}>
              <FaSignOutAlt size={18} /> Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">
              <FaSignInAlt size={18} /> Entrar
            </Link>
            <Link to="/register" className="nav-link">
              <FaUserPlus size={18} /> Registro
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
