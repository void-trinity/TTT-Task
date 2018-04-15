import React, { Component } from 'react';
import '../materialize.css';

export default class Loader extends Component {
    render() {
        return(
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        );
    }
}