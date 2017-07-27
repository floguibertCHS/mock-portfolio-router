import React, {Component} from 'react';


export default class Splash extends Component {
  render() {
    // INLINE STYLING
    let cuisineStyle = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/cuisine.jpg)",
      "backgroundSize": "cover",
      "textShadow": "1px 1px 2px black",
      "height": "100%",
      "padding": "100px"
    }
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
            <h3 className="headings-white" style={subHeadings}>Splash</h3>
            <img className="img-responsive" src="images/sea.svg"/>
          </div>
        </section>
      </div>
    );
  }
}
