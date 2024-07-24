import React from "react";
import { createRoot } from "react-dom/client";
import { HeaderComponent, LogoComponent, FooterComponent } from "./components";
import * as classes from "./styles.scss";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.Fragment>
    <div className={classes.container}>
      <HeaderComponent />
      <LogoComponent />
      <FooterComponent />
    </div>
  </React.Fragment>
);
