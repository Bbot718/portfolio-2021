import React  from 'react';

import Header from './header';
import Work from './work/work';
import About from './about';
import Exhibition from './exhibition';
import Contact from './contact';

class HomePage extends React.Component {

  render() {
    return (
      <div id="home-page">
        
        {/* Welcome Section */}
        <header>
          <Header theme='dark'/>
        </header>

        {/* Work Section */}
        <Work />
        <div className="large-spacing" />

        {/* About Section */}
        <div className="container">
          <div className="row">
            <div className="col-3-of-4--no-margin">
              <About />
              <div className="medium-spacing" />
              <Exhibition />
            </div>
          </div>
        </div>
        <div className="large-spacing" />

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
