import React from "react";
import { Link } from "react-router-dom";

const Boton = ({ texto = "" }) => {
    return (
        <div>
            <button>{texto}</button>
        </div>
    );
};

export default Boton;
