import React, { Component } from 'react';
import '../materialize.css';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state={
            key: 0
        };
    }

    render() {
        let rows = this.props.data.map((word, index) => {
            return <WordRow key={index}
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
                <a className="waves-effect waves-light btn" onClick={this.props.tryagain}>Try Again</a>
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
