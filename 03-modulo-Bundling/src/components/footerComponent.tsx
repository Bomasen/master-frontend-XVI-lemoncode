import React from "react";
import * as classes from "../styles.scss"

export const FooterComponent : React.FC = () =>{
    return (
        <>
        <footer className={classes.footerContainer}>
            <p>Borja Martínez Sendra</p>
            <p>Master LemonCode XVI</p>
        </footer>
        </>
    )
} 