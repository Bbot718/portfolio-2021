import React  from 'react';

import '../src/stylesheet/css/main.css';
import SmoothScroll from './utils/smooth-scroll.js';

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
                <HomePage />
              </div>
          </div>
      </div>
    )
  }
}

export default App;
