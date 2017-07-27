import React, {Component} from 'react';


export default class Splash extends Component {
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
            <h3 className="sub-headings" style={subHeadings}>Welcome to the Splash Page</h3>
            <img className="img-responsive" src="images/sea.svg"/>
          </div>

        </section>
      </div>
    );
  }
}
