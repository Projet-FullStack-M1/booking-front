import { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src="/images/logo.png" alt="logo" />
            <span>Booking App</span>
          </a>
          <a href="">Accueil</a>
          <a href="">A propos</a>
          <a href="">Contact</a>
        </div>
        <div className="right">
          <a href="">Connexion</a>
          <a href="" className="register">
            S&apos;enregistrer
          </a>
          <div className="menuIcon">
            <img
              src="/images/menu.png"
              alt="menu"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href="">Accueil</a>
            <a href="">A propos</a>
            <a href="">Contact</a>
            <a href="">Connexion</a>
            <a href="" className="register">
              S&apos;enregistrer
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
