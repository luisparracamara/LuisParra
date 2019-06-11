import React from 'react';
import './About.css';

const Cv = (props) => {
    console.log(props);

    const {nombre,ciudad,telefono,email,linkedin} = props.datos
    
    return (
       <div class="row">
           <div className="col-md-4">
               <div className="table table-responsive">
                <table border="0">
                    <tr>
                        <th><i class="fas fa-user"></i>Name:</th>
                        <td> {nombre} </td>
                    </tr>
                    <tr>
                        <th><i class="fas fa-envelope"></i>Email:</th>
                        <td> {email} </td>
                    </tr>
                    <tr>
                        <th><i class="fas fa-phone"></i>Phone number:</th>
                        <td> {telefono} </td>
                    </tr>
                    <tr>
                        <th><i class="fab fa-linkedin"></i>Linkedin:</th>
                        <td><a href={linkedin} target="_blank">Linkedin profile</a></td>
                    </tr>
                    <tr>
                        <th><i class="fas fa-map-pin"></i>City:</th>
                        <td> {ciudad} </td>
                    </tr>
                    <tr>
                        <td colSpan="2"> &nbsp; </td>
                    </tr>
                    <tr>
                        <th colSpan="2" className="text-center">Skills</th>
                    </tr>

                    <tr>
                        <td colSpan="2" className="text-center" id="php"><i class="fab fa-php"></i>{props.datos.lenguajes[0].php}</td>
                    </tr>

                    <tr>
                        <td colSpan="2" className="text-center" id="javascript"><i class="fab fa-js-square"></i>{props.datos.lenguajes[0].javascript}</td>  
                    </tr>
                    <tr>
                        <td colSpan="2" className="text-center" id="jquery"><i class="fab fa-js-square"></i>{props.datos.frameworks[0].jquery}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="text-center" id="reactjs"><i class="fab fa-react"></i>{props.datos.frameworks[0].reactjs}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="text-center" id="mysql"><i class="fas fa-database"></i>{props.datos.databases[0].mysql}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="text-center" id="html"><i class="fab fa-html5"></i>{props.datos.lenguajes[0].html}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="text-center" id="css3"><i class="fab fa-css3"></i>{props.datos.lenguajes[0].css3}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="text-center" id="bootstrap"><i class="fab fa-bootstrap"></i>{props.datos.frameworks[0].bootstrap}</td>
                    </tr>
                </table>
                </div>
           </div>

           <div className="col-md-8">
            <div className="table table-responsive">
                <table border="0">
                    <tr>
                        <th colSpan="2" className="text-center">Project Experience</th>   
                    </tr>

                    <tr>
                        <th>Project:</th>
                        <td>{props.datos.proyecto1[0].proyecto}</td>   
                    </tr>

                    <tr>
                        <th>Rol:</th>
                        <td>{props.datos.proyecto1[0].rol}</td>
                    </tr>

                    <tr>
                        <th>Description:</th>
                        <td>{props.datos.proyecto1[0].tema}</td>
                    </tr>

                    <tr>
                        <td colSpan="2">&nbsp;</td>
                    </tr>

                    <tr>
                        <th>Project:</th>
                        <td>{props.datos.proyecto2[0].proyecto}</td>
                    </tr>

                    <tr>
                        <th>Rol:</th>
                        <td>{props.datos.proyecto2[0].rol}</td>
                    </tr>

                    <tr>
                        <th>Description:</th>
                        <td>{props.datos.proyecto2[0].tema}</td>
                    </tr>

                    <tr>
                        <td colSpan="2">&nbsp;</td>
                    </tr>
                    
                    <tr>
                        <th className="text-center" colSpan="2">Education</th>
                    </tr>
                    
                    <tr>
                        <td colSpan="2" className="text-center"><b>{props.datos.educacion[0].escuela}</b></td>
                    </tr>

                    <tr>
                        <th>English level:</th>
                        <td>{props.datos.educacion[0].english}</td>
                    </tr>

                    <tr>
                        <th>Spanish level:</th>
                        <td>{props.datos.educacion[0].spanish}</td>
                    </tr>
                    
                </table>
            </div>
           </div>

       </div>


       
    );
};

export default Cv;