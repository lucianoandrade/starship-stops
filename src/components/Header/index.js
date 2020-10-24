import React from "react";

import ImgHeader from "../../assets/logo-starship.gif";
import "./styles.scss"

function Header() {  
  return (
      <header>
          <img src={ImgHeader} alt="Logo Starship-stops"></img>
      </header>
  );
}

export default Header;