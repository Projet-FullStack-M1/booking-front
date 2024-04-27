import { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav>
        <div className="left">
          <Link to="/" className="logo">
            <img src="/images/logo.png" alt="logo" />
            <span>Booking</span>
          </Link>

          <Link to="">A propos</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="right">
          <Link to="/auth/login">Connexion</Link>
          <Link to="/auth/register" className="register">
            S&apos;enregistrer
          </Link>
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
