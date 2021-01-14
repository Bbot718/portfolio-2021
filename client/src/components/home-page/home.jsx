import React  from 'react';

import Header from './header';
import Work from './work';
import About from './about';
import Exhibition from './exhibition';
import Contact from './contact';


class HomePage extends React.Component {

  render() {
    return (
      <div id="home-page">
        
        {/* Welcome Section */}
        <header id="header">
          <Header theme='dark'/>
        </header>

        {/* Work Section */}
        <Work />

        {/* About Section */}
        <div id="about-full" className="container">
          <div className="row">
            <div className="col-3-of-4--no-margin">
              <About />
              <div className="medium-spacing" />
              <Exhibition />
            </div>
          </div>
        </div>

        <Contact />
        <div className="medium-spacing" />

        <footer className="footer">
          <div className="info-heading__container">
            <span className="footer__content info-heading">Designed with <span className="info-heading--red"> ♥ </span> | Copyright 2020</span>
          </div>
        </footer>
      </div>
    )
  }
}

export default HomePage;
