import React  from 'react';

import '../src/stylesheet/css/main.css';
import SmoothScroll from './utils/smooth-scroll.js';

import Navigation from './components/navigation/navigation.jsx';
import HomePage from './components/home-page/home.jsx'
import Project from './components/project/project.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentProject: null }
    this.SwitchPageHandler = this.SwitchPageHandler.bind(this);
  }

  SwitchPageHandler(data){
    (data) ? this.setState({currentProject: data}) : this.setState({currentProject: null}) 
  }


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
                    <div className="col-3-of-14 no-mobile">
                      <nav className="sidebar">
                        <Navigation/>
                      </nav> 
                      </div>
                    <div className="col-11-of-14">
                      <div className="main">
                        {
                          (this.state.currentProject === null) ? (
                            <HomePage action={this.SwitchPageHandler} />)
                          :( 
                            <Project />
                          )
                               
                          
                        }
                       
                        
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
