import React, { Component } from 'react';
import Cv from './Cv';

export default class About extends Component {
    render() {
        
        const about = this.props.about


        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-3 mt-5">
                        {Object.keys(about).map(about => (
                            <Cv
                                key={about}
                                datos={this.props.about[about]}
                            />
                        ))}
                    </div>

                </div>
            </div>
        )
    }
}
