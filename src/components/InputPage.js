import React, { Component } from 'react';

export default class InputPage extends Component{
    render() {
        return(
            <div>
                <div className="row">
                    <p className="left-align">This app is completely made on react JS with node JS as backend tool using express JS
                        library. Materialize CSS has been used for little bit styling of the page for better
                        representation. Link: <a href="http://materializecss.com">Materialize CSS</a>
                    </p>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div className="card grey darken-4">
                            <div className="card-content white-text">
                                <span className="left-align card-title">Input Here</span>
                                <p className="left-align">Basically, the input box below takes input as a number N and returns
                                first n numbers with highest frequency. Enter the value below: 
                                </p>
                            </div>
                            <div className="card-action">
                                <div className="input-field row">
                                    <input id="number" type="number" className="white-text" onChange={this.props.handleChange} />
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: 50 }}>
                            <a className="waves-effect waves-light black btn" onClick={this.props.makerequest}>Fetch Words</a>
                        </div>
                    </div>
                </div>
          </div>
        );
    }
}