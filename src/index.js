import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//IMPORT COMPONENTS
import BaseLayout from '../src/components/BaseLayout';
import Portfolio from '../src/components/Portfolio';
import Splash from '../src/components/Splash';
import About from '../src/components/About';
import Home from '../src/components/Home';
import Contact from '../src/components/Contact';
import References from '../src/components/References';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={Splash}/>
        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
        <Route path="/References" component={References} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
,document.getElementById('root'));
registerServiceWorker();
