import React from "react";
import Imagesrc from "@/public/img/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Image src={Imagesrc} alt="Logo" width={37} height={37}/>
        <h1 className="name">T&H</h1>
      </div>
      <nav>
        <a href="" className="nav-buutons">Home</a>
        <a href="" className="nav-buutons">Shop</a>
        <a href="" className="nav-buutons">About</a>
        <a href="" className="nav-buutons">Contact</a>
      </nav>
      <div className="buttons">
        <button className="SignUp">Sign Up</button>
        <button className="LogIn">Login</button>
      <i className="lightmode"></i>
      </div>
    </header>
  );
};

export default Header;
