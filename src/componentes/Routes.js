import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import Proyectos from './Proyectos';
import infoProyectos from '../datos/info';
import infoAbout from '../datos/about';
import Header from './Header';
import SingleProyecto from './SingleProyecto';
import Navegacion from './Navegacion';
import About from './About';


export default class Routes extends Component {
   
   state = {
       proyectos: [],
       about: []
   }

   componentWillMount() {
       this.setState({
           proyectos: infoProyectos,
           about: infoAbout
       }
       )}

  
   

    render() {

        return (
                <BrowserRouter>
                    <Header />
                    <Navegacion />
                <ScrollToTop>
                    <Switch>
                        <Route exact path="/" render={() => (
                            <Proyectos
                                proyectos={this.state.proyectos}
                            />
                        )} />

                        
                        <Route exact path="/proyecto/:proyectoId" render={(props) => {
                                let idProyecto = props.location.pathname.replace('/proyecto/', '');
                                return(      
                                    <SingleProyecto 
                                        proyecto={this.state.proyectos[idProyecto]}
                                    />           
                                ) 
                        }}/>

                        <Route exact path="/about" render={()=>(
                            <About 
                            about={this.state.about}
                            />
                        )} />
                   
                    </Switch>   
                    </ScrollToTop>     
                </BrowserRouter>
        )
    }
}
