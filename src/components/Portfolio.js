import React, {Component} from 'react';
import BaseLayout from './BaseLayout';

// IMPORT COMPONENTS

class Portfolio extends Component {

  render() {
    return (
      <div className="app-body offset col-lg-10 col-lg-offset-1">
        <h2 className="col-lg-offset-2 headings">Portfolio</h2>

        <div className="card-deck">

          <div className="card">
            <h4 className="card-title">Project #1</h4>
            <img className="img-portfolio" src="images/Screenshot 2017-07-27 11.30.08.png" alt="Card image cap"/>
          </div>

          <div className="card">
            <h4 className="card-title">Project #2</h4>
            <img className="img-portfolio" src="images/37639-O17PZ7.jpg" alt="Card image cap"/>
          </div>

        </div>
      </div>
    )
  }
}

export default Portfolio;
