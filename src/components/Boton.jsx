import React from "react";
import { Link } from "react-router-dom";

const Boton = ({ texto = "", onClick }) => {
    return (
        <div>
            <button onClick={onClick}>{texto}</button>
        </div>
    );
};

export default Boton;
