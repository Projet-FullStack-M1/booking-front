import { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const user = true;
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
          <Link to="/list">List</Link>
        </div>
        <div className="right">
          {user ? (
            <div className="user">
              <img
                src="https://static.vecteezy.com/ti/vecteur-libre/p3/5005788-user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-vector-illustration-eps10-gratuit-vectoriel.jpg"
                alt="user"
              />
              <span>Malick</span>
              <Link to="/account/profile">Profil</Link>
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
