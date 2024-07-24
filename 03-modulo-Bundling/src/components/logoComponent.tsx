import React from "react";
import logoLemon from "../assets/logo_1.png";
import logoWebpack from "../assets/js_webpack_logo_icon_167796.png";
import * as classes from "../styles.scss";

export const LogoComponent: React.FC = () => {
  return (
    <>
      <div className={classes.assets}>
        <img src={logoLemon} className={classes.imageLemon} />
        <img src={logoWebpack} className={classes.imageWebpack} />
      </div>
    </>
  );
};
