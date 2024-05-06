import { useContext, useState } from "react";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../../lib/apiRequest";
import { AuthContext } from "../../../context/AuthContext";

const Header = () => {
  const [open, setOpen] = useState(false);

  const { currentUser, updateCurrentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("auth/logout");
      updateCurrentUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <header>
      <nav>
        <div className="left">
          <Link to="/" className="logo">
            <img src="/images/logo.png" alt="logo" />
            <span>Booking</span>
          </Link>

          <Link to="/about">A propos</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/list">List</Link>
        </div>
        <div className="right">
          {currentUser ? (
            <div className="user">
              <img src={currentUser.avatar || "/images/noavatar.jpg"} alt="" />
              <span>{currentUser.username}</span>
              <Link className="profile" to="/account/profile">
                <div className="notification">3</div>
                <span> Profil</span>
              </Link>
              <button onClick={handleLogout} className="logout">
                Déconnexion
              </button>
            </div>
          ) : (
            <>
              <Link to="/auth/login">Connexion</Link>
              <Link to="/auth/register" className="register">
                S&apos;enregistrer
              </Link>
            </>
          )}
          <div className="menuIcon">
            <img
              src="/images/menu.png"
              alt="menu"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <Link to="">A propos</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/auth/login">Connexion</Link>
            <Link to="/auth/register" className="register">
              S&apos;enregistrer
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
