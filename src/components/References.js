import React, {Component} from 'react';
//IMPORT STYLES
import '../styles/App.css';

export default class References extends Component {
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
            <h2 className="headings">
              References
            </h2>
            <hr/>
            <div className="card">
              <div className="card-title">from Tim Allen</div>
              <p className="primary-text">
                'Duis ullamcorper urna vitae est imperdiet, ut varius elit eleifend. Nullam nibh nunc, convallis eu nisl sit amet, porta faucibus tortor.'
              </p>
              <p className="primary-text">
                <b>Tim Allen</b>
              </p>
            </div>
            <hr/>
            <div className="card">
              <div className="card-title">from Tim Allen</div>
              <p className="primary-text">
                'Duis ullamcorper urna vitae est imperdiet, ut varius elit eleifend. Nullam nibh nunc, convallis eu nisl sit amet, porta faucibus tortor.'
              </p>
              <p className="primary-text">
                <b>Bonjovi</b>
              </p>
            </div>
            <hr/>
            <div className="card">
              <div className="card-title">from Tim Allen</div>
              <p className="primary-text">
                'Duis ullamcorper urna vitae est imperdiet, ut varius elit eleifend. Nullam nibh nunc, convallis eu nisl sit amet, porta faucibus tortor.'
              </p>
              <p className="primary-text">
                <b>Roxy</b>
              </p>
            </div>
          </article>
        </section>
      </div>
    );
  }
}
