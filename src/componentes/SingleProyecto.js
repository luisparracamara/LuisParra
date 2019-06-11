import React from 'react';
import './SingleProductos.css';
import './bootstrap.min.css';


const SingleProyecto = (props) => {
    const { backend, database, descripcion, fecha, frontend, id, imagen_pagina, live_demo, nombre, portada } = props.proyecto;


    
    return (
        
        <div className="container w-50">
            
                    <div className="card mt-5">
                        <div className="card-image"><img src={portada} className="imagen_portada img-fluid" alt={nombre}  /></div>
                    <div className="card-body">

                    <div className="row">
                        <div className="col-sm-6 contenedorDetalles">
                            <h5> <i class="fas fa-briefcase"></i>{nombre} </h5>
                            <div className="mt-4"><i class="fas fa-calendar-day"></i>Fecha: {fecha} </div>
                            <div className="mt-4 text-justify"><i class="far fa-file-alt"></i>{descripcion} </div>
                            {/* <div className="mt-4"><a className="btn btn-warning d-block" href={live_demo} target="_blank"><i class="fas fa-desktop"></i>
                            Live demo</a></div> */}
                            
                    </div>

                        <div className="col-sm-6 contenedorLenguajes">                               
                            <h5 className="mt-2"><i class="fas fa-laptop-code"></i>Tecnologías</h5>
                            
                            <span className="mt-2">Back-end</span>
                            <div className="backend">
                                <i class="fab fa-php"></i>{props.proyecto.backend[0].php}
                            </div>

                            <div className="mt-2">Front-end</div>
                            <div className="frontend mt-2">
                                <i class="fab fa-js"></i>{props.proyecto.frontend[0].javascript}
                            </div>

                            <div className="frontend mt-2">
                                <i class="fab fa-js"></i>{props.proyecto.frontend[0].jquery}
                            </div>

                            <div className="mt-2">Base de datos</div>
                            <div className="database mt-2 mb-3">
                                <i class="fas fa-database"></i>{props.proyecto.database[0].mysql}
                            </div>

                                                            
                        </div>

                    <div className="col-md-12">
                            <img src={imagen_pagina} alt={nombre} className="img-fluid imgPagina mt-5" />
                    </div>
                 

                  



                        </div>
                    </div>
                </div>
            </div>
 
        
    );
};

export default SingleProyecto;