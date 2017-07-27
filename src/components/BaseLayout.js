import React, {Component} from 'react';
// IMPORT LINK
import {Link} from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio';
import Splash from './Splash';

export default class BaseLayout extends Component {
  render() {
    // INLINE STYLING
    let titleStyle = {
      "fontFamily": "Homemade Apple, cursive",
      "fontSize": "4rem",
      "paddingTop": "200px"
    }
    let subtitleStyle = {
      "fontFamily": "Raleway",
      "fontSize": "2rem"
    }
    let headerStyle = {
      "textAlign": "center",
      "height": "600px",
      "color": "#fff",
      "backgroundImage": "url(./images/header-photo.jpeg)",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "boxShadow": "rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
      "textShadow": "1px 1px 2px black",
      "fontFamily": "decorative"
    }
    let navTitle = {
      "fontFamily": "Homemade Apple, cursive",
      "fontSize": "150%"
    }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li style={navTitle}>
                  <Link to="/">
                    <img className="img-logo" src="images/sea.svg"/></Link>
                </li>
                <li>
                  <Link to="/Home">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/Portfolio">Portfolio</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12 header" style={headerStyle}>
            <div className="header-title">
              <div className="restaurant-name" style={titleStyle}>
                Flo G. Holt
              </div>
              <div className="subtitle" style={subtitleStyle}>
                portfolio
              </div>
            </div>
          </div>
        </nav>

        {this.props.children}

        <footer className="col-lg-11">
          <span className="footer-title">Contact Info:
          </span>
          <span>
            floraykes@gmail.com | (843) 478-9373
          </span>
        </footer>
      </div>
    );
  }
}
