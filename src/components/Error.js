import React, { Component } from 'react';
import '../materialize.css';

export default class Error extends Component {
    render() {
        return(
            <div>
                <h1> Word limit exceeded. More than words present in the file </h1>
                <div className="row" style={{ marginTop: 30 }}>
                    <a className="waves-effect waves-light btn" onClick={this.props.tryagain}>Try Again</a>
                </div>
            </div>
        );
    }
}