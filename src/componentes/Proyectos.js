import React, { Component } from 'react'
import Proyecto from './Proyecto';


export default class Proyectos extends Component {
    render() {

        const info = this.props.proyectos
       
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-3 mt-5">
                    {Object.keys(info).map(proyecto => (
                        <Proyecto 
                            key = {proyecto}
                            datos = {this.props.proyectos[proyecto]}
                        />
                    ))}
                </div>
                
            </div>
            </div>
        )
    }
}
