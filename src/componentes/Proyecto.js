import React from 'react';
import { Link } from 'react-router-dom';

const Proyecto = (props) => {
    const {backend,database,descripcion,fecha,frontend,id,imagen_pagina,live_demo,nombre,portada} = props.datos;
    return (    
        
        <div className="contenedorIndex">   
             
                    <img src={portada} className="imagen_portada img-fluid" alt={nombre} />

                    <div class="alert alert-dismissible alert-info">
                        
                        <div class="d-flex flex-column bd-highlight mb-3">
                            <div class="p-2 bd-highlight"><h5><i class="fas fa-laptop-code"></i>{nombre} </h5></div>
                            <div class="p-2 bd-highlight"><p class="text-justify"> {descripcion} </p> </div>
                            <div class="p-2 bd-highlight">
                                <Link to={`/proyecto/${id}`} className="btn btn-warning d-block"><i class="fas fa-arrow-right"></i>Ver detalles</Link>
                                {/* <a className="btn btn-warning w-50" href={live_demo} target="_blank"><i class="fas fa-desktop"></i>Live demo</a> */}
                                </div>
                        </div>
                    </div>      
                      <hr />                                               
                </div>
                
    );
};

export default Proyecto;