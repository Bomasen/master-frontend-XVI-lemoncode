import React from "react";
import * as classes from "../styles.scss";

export const HeaderComponent = () => {
  const apiPath = process.env.API_BASE;

  return (
    <>
      <header className={classes.headerContainer}>
        <h1>Bienvenidos al Laboratorio De Bundling : Webpack</h1>
        <p><b>API path is:</b> {apiPath}</p>
      </header>
    </>
  );
};
