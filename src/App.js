import React, { Component } from 'react';
import axios from 'axios';
import './materialize.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: [],
      n: 0,
      success: false,
      loading: false
    }
  }

  componentDidMount()  {
    document.title = "Terribly Tiny Tales";
  }

  makerequest() {
    this.setState({ loading: true });
    axios.post('https://enigmatic-brushlands-26794.herokuapp.com/api/count', {
      "N": this.state.n
    })
    .then(response => {
      this.setState({ loading: false, loaded: true, data: response.data.data.wordlist, success: response.data.data.success })
    })
    .catch(error => console.log(error));
  }

  handleChange(event) {
    this.setState({n: event.target.value});
  }

  rendercheck() {
    if(!this.state.loaded) {
      if(!this.state.loading) {
        return (
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
                    <input id="number" type="number" className="white-text" onChange={this.handleChange.bind(this)}/>
                  </div>
                  </div>
                </div>
                <div style={{ marginTop: 50 }}>
                  <a className="waves-effect waves-light black btn" onClick={this.makerequest.bind(this)}>Fetch Words</a>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return(
          <h1>Loading</h1>
        );
      }
    }
    if (this.state.success) {
      let rows = this.state.data.map(word => {
        return <WordRow key={5}
          data = {
            word
          }
          />
      })
      return(
        <div className="container">
          <table className='striped highlight'>
            <thead>
              <tr>
                <th>Word</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
          <div className="row" style={{ marginTop: 30 }}>
            <a className="waves-effect waves-light btn" onClick={() => this.setState({ loaded: false})}>Try Again</a>
          </div>
        </div>
      );
    } else {
      return(
        <div>
          <h1> Word limit exceeded. More than words present in the file </h1>
          <div className="row" style={{ marginTop: 30 }}>
              <a className="waves-effect waves-light btn" onClick={() => this.setState({ loaded: false})}>Try Again</a>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper grey darken-4">
            <a href="#" className="brand-logo center">Terribly Tiny Tales Task</a>
          </div>
        </nav>
        <div className='container' style={{ alignContent: 'center' }}>
          <div style={{ marginTop: 50 }}>
            {this.rendercheck()}
          </div>
        </div>
      </div>
    );
  }
}

const WordRow = (props) => {
  return (
    <tr>
      <td>
        { props.data.word }
      </td>
      <td>
        { props.data.count }
      </td>
    </tr>
  );
}

export default App;
