import React, {Component} from 'react';
//IMPORT STYLES
import '../styles/App.css';

export default class Portfolio extends Component {
  render() {

    let aboutStyle = {
      "backgroundColor": "",
      "backgroundSize": "cover",
      "backgroundPosition": "top",
      "height": "100%",
      "padding": "100px"
    }
    return (
      <div className="app-body about offset col-lg-10 col-lg-offset-1">
        <section className="row" style={aboutStyle}>
          <article className="col-lg-6 col-lg-offset-3">
            <h2 className="headings">Portfolio</h2>
            <hr/>
            <div className="card-deck">

              <div className="card">
                <h4 className="primary-text">Project #1</h4>
                <img className="img-portfolio" src="images/Screenshot 2017-07-27 11.30.08.png" alt="Card image cap"/>
              </div>

              <div className="card">
                <h4 className="primary-text">Project #2</h4>
                <img className="img-portfolio" src="images/37639-O17PZ7.jpg" alt="Card image cap"/>
              </div>

            </div>
          </article>

        </section>
      </div>
    )
  }
}
