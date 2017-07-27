import React, {Component} from 'react';
//IMPORT STYLES
import '../styles/App.css';

export default class About extends Component {
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
              About me
            </h2>
            <hr/>
            <p className="primary-text">
              Duis ullamcorper urna vitae est imperdiet, ut varius elit eleifend. Nullam nibh nunc, convallis eu nisl sit amet, porta faucibus tortor. Mauris sit amet lacus quis orci ornare condimentum vestibulum nec sem. Fusce suscipit eros diam, a pretium erat cursus id. Nam ullamcorper mauris sed vulputate consectetur. Donec id gravida nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse non turpis eu justo feugiat vehicula. Nam nec nulla odio. Pellentesque ac mattis justo.
            </p>
            <p className="primary-text">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse non turpis eu justo feugiat vehicula. Nam nec nulla odio. Pellentesque ac mattis justo. Praesent pretium interdum ipsum quis varius. Cras molestie enim diam, malesuada maximus urna consequat sit amet. Etiam elementum convallis viverra. Aliquam rhoncus lorem enim, non pulvinar diam molestie egestas. Morbi mollis ultrices odio, vitae euismod erat ornare at.
            </p>
          </article>
        </section>
      </div>
    );
  }
}
