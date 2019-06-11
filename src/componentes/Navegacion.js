import React from 'react';
import {NavLink} from "react-router-dom";
import "./Navegacion.css"

const Navegacion = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light navegacion">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor03">
                <ul class="navbar-nav m-auto">
                    <li class="nav-item">
                        <NavLink to={'/proyectos'} activeClassName="activo">Inicio</NavLink>
                        <NavLink to={'/about'} activeClassName="activo">Acerca de mí</NavLink>
                    </li>
                   
                </ul>
            
  </div>
</nav>
    );
};

export default Navegacion;