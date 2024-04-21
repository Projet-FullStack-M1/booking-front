import { useState } from "react";
import "./Header.scss";

const Header = () => {
    const [open , setOpen] = useState(false);
  return (
  <header>
    <nav>
        <div className="left">
            <a href="/" className="logo">
                <img src="/images/logo.png" alt="logo" />
                <span>Booking App</span>
            </a>
            <a href="">
                Home
            </a>
            <a href="">
                About
            </a>
            <a href="">
                Contact
            </a>
            <a href="">
                Agents
            </a>
        </div>
        <div className="right">
            <a href="">
                Login
            </a>
            <a href="" className="register" >
                Register
            </a>
            <div className="menuIcon">
                <img src="/images/menu.png" alt="menu" onClick={() => setOpen(!open)} />
            </div>
            <div className={open ? "menu active" : "menu"}>
                <a href="">
                    Home
                </a>
                <a href="">
                    About
                </a>
                <a href="">
                    Contact
                </a>
                <a href="">
                    Agents
                </a>
                <a href="">
                    Login
                </a>
                <a href="" className="register">
                    Register
                </a>
            </div>
        </div>
    </nav>
  </header>
    
  )
}

export default Header
