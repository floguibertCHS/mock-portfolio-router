import React, {Component} from 'react';
// IMPORT EMAIL COMPONENT
import Email from '../components/Email'

export default class Find extends Component {
  render() {
    // INLINE STYLING
    let style = {
      "backgroundColor": "#222222",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "100px"
    }
    let subHeadings = {
      "color": "#fff"
    }

    return (
      <div className="app-body findus offset col-lg-10 col-lg-offset-1">
        <section className="row" style={style}>
          <div className="col-lg-8 map">
            <h3 className="headings-white">Find us...</h3>

            <i className="fa fa-facebook" aria-hidden="true"></i>' '
            <i className="fa fa-instagram" aria-hidden="true"></i>' '
            <i className="fa fa-github" aria-hidden="true"></i>

            <h3 className="sub-headings" style={subHeadings}>Directions</h3>
            <iframe className="img-responsive" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.6373809290067!2d-79.87912884039869!3d32.80187294365263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe70ff396802fd%3A0xcae2068ef28b3d0f!2s985+Cummings+Cir%2C+Mt+Pleasant%2C+SC+29464!5e0!3m2!1sen!2sus!4v1501180045942"></iframe>
            <a href="">
              <p className="email">985 Cummings Circle Mt Pleasant, SC, 29464
              </p>
            </a>
          </div>
          <hr/>

          <div className="col-lg-4">
            <h3 className="sub-headings" style={subHeadings}>
              Contact Info
            </h3>
            <p className="email">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                864-478-9373</span>
            </p>
            <Email/>
          </div>
        </section>
      </div>
    );
  }
}
