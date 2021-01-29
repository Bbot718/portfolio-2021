//React
import React  from 'react';
import ReactDOM from 'react-dom';

//CSS
import '../src/stylesheet/css/main.css';

//Body Scrollbar
import Scrollbar from 'smooth-scrollbar';
import ScrollerProxy from './utils/smooth-scrollbar/scroller-proxy.js'
import FixedElements from './utils/smooth-scrollbar/fixed-elements.js'

//Components
import Navigation from './components/navigation/navigation.jsx';
import HomePage from './components/home-page/home.jsx'
import Project from './components/project/project.jsx'

//Utilities
import ToggleScroll from './utils/prevent-scroll.js'


class App extends React.Component {
  constructor(props) {
    super(props);

   this.bodyScrollBar = {};

    this.state = { currentProject: null, previousProject: null }
    this.SwitchProjectId = this.SwitchProjectId.bind(this);
    this.scrollIntoViewHandler = this.scrollIntoViewHandler.bind(this);
  }

  
  SwitchProjectId(data){

    this.setState({previousProject: this.state.currentProject});
    // Handles Switching Pages
    (data) ? this.setState({currentProject: data}) : this.setState({currentProject: null}) 
    this.bodyScrollBar.scrollTo(0, 0, 0);
  }

  scrollIntoViewHandler(target){ this.bodyScrollBar.scrollIntoView(target) }

  
  componentDidMount(){

    
    // Setting Up Smooth Scrollbar
    this.bodyScrollBar = Scrollbar.init(document.querySelector(".scrollable"), {damping: .05, renderByPixels: true})
    this.bodyScrollBar.track.yAxis.element.remove();

    ScrollerProxy(this.bodyScrollBar);

    FixedElements(this.bodyScrollBar, document.querySelector('.navigation'));
    FixedElements(this.bodyScrollBar, document.querySelector('.header'));

    ToggleScroll(false);


    //document.onload = HomePageAnimations();
  }


  render() {
    return (
      <div className="App">
        <div ref={this.state.scroller} className="scrollable" data-scrollbar>
              <div className="wrap-overflow">
             
                <div className="container">
                  <div className="row">
                    <div className="col-3-of-14 no-mobile">
                      <nav className="sidebar">
                        <Navigation currentProject={this.state.currentProject} scrollIntoView={this.scrollIntoViewHandler}  />
                      </nav> 
                      </div>
                    <div className="col-11-of-14">
                        {
                          (!this.state.currentProject) ? (
                            <HomePage currentProject={this.state.currentProject} previousProject={this.state.previousProject} SwitchProjectId={this.SwitchProjectId} />
                          ):( 
                            <Project currentProject={this.state.currentProject} previousProject={this.state.previousProject} SwitchProjectId={this.SwitchProjectId}/>
                          )
                        }
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
