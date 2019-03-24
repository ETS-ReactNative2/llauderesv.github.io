import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Footer from './Footer';
import Navigation from './Navigation';

import Home from './Home';
import About from './About';
import Blogs from './Blogs';
import Skills from './Skills';
import NotFound from './NotFound';

// Images..
import fb from '../images/fb.svg';
import linkedin from '../images/linkedin.svg';
import twitter from '../images/twitter.svg';

import '../App.scss';

const navLinks = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'About',
    to: '/about',
  },
  {
    name: 'Blogs',
    to: '/blogs',
  },
  {
    name: 'Skills',
    to: '/skills',
  },
];

const footerLinks = [
  {
    src: fb,
    alt: 'fb',
    link: 'https://www.facebook.com/llauderesv',
  },
  {
    src: linkedin,
    alt: 'linkedin',
    link: 'https://www.linkedin.com/in/llauderesv/',
  },
  {
    src: twitter,
    alt: 'twitter',
    link: 'https://twitter.com/llaudevc',
  },
];

const App = ({ location }) => {
  return (
    <div className="app">
      <div className="left-content">
        <Navigation links={navLinks} />
        <Footer links={footerLinks} />
      </div>

      <div className="right-content">
        <div className="content">
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/skills" component={Skills} />
            <Route render={() => <NotFound />} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
