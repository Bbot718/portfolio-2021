import React  from 'react';
import '../src/stylesheet/css/main.css';
import SmoothScroll from './utils/smooth-scroll.js';


class App extends React.Component {
  componentDidMount(){
    const smoothScroll = new SmoothScroll();
  }

  render() {
    return (
      <div className="App">
        <div className="scrollable" data-scrollbar>
              <div className="wrap-overflow">
                <section className="test">1</section>
                <section className="test">2</section>
                <section className="test">3</section>

              </div>
          </div>
      </div>
    )
  }
}

export default App;
