import React, { Component } from 'react';
import axios from 'axios';
import Table from './components/Table';
import Error from './components/Error';
import Loader from './components/Loader';
import InputPage from './components/InputPage';
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
          <InputPage handleChange={this.handleChange.bind(this)} makerequest={this.makerequest.bind(this)}/>
        );
      } else {
        return(
          <Loader />
        );
      }
    }
    if (this.state.success) {
      return(
        <Table data={this.state.data} tryagain={() => this.setState({ loaded: false})}/>
      );
    } else {
      return(
        <Error tryagain={() => this.setState({ loaded: false})}/>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper grey darken-4">
            <a href="http://terriblytinytales.com/" className="brand-logo center">Terribly Tiny Tales Task</a>
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

export default App;
