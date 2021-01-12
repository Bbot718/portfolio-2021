import React  from 'react';

import '../src/stylesheet/css/main.css';
import SmoothScroll from './utils/smooth-scroll.js';

import Navigation from './components/navigation';
import HomePage from './components/home-page/home.jsx'


class App extends React.Component {
  componentDidMount(){
    const smoothScroll = new SmoothScroll();
  }

  render() {
    return (
      <div className="App">
        <div className="scrollable" data-scrollbar>
              <div className="wrap-overflow">
              <div className="header__background">
                <div className="header__background--dark" />
                <div className="header__background--light" />
              </div>
                <div className="container">
                  <div className="row">
                    <div className="col-3-of-14">
                      <nav className="sidebar">
                        <Navigation />
                      </nav> 
                      </div>
                    <div className="col-11-of-14">
                      <div className="main">
                        <HomePage />
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
          </div>
      </div>
    )
  }
}

export default App;
