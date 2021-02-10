//React
import React  from 'react';
import ReactDOM from 'react-dom';

//CSS
import '../src/stylesheet/css/main.css';

//Body Scrollbar
import Scrollbar from 'smooth-scrollbar';
import ModalPlugin from './utils/smooth-scrollbar/modal-plugin'
import ScrollerProxy from './utils/smooth-scrollbar/scroller-proxy.js'
import FixedElements from './utils/smooth-scrollbar/fixed-elements.js'

//Components
import Navigation from './components/navigation/navigation.jsx';
import HomePage from './components/home-page/home.jsx'
import Project from './components/project/project.jsx'




class App extends React.Component {
  constructor(props) {
    super(props);

   this.bodyScrollBar = {};

    this.state = {  currentProject: 'home', 
                    numberOfProjects: null,
                    isFirstPassage: {
                      header: true,
                      work: true,
                      about: true,
                      exhibition: true,
                      contact: true
                    }
    }
    this.setNumberOfProjects = this.setNumberOfProjects.bind(this);
    this.SwitchProjectId = this.SwitchProjectId.bind(this);
    this.UpdateFirstPassage = this.UpdateFirstPassage.bind(this);
    this.scrollIntoViewHandler = this.scrollIntoViewHandler.bind(this);
    this.toggleScroll = this.toggleScroll.bind(this);
  }

  
 
  SwitchProjectId(data){

    (data) ? this.setState({currentProject: data}) : this.setState({currentProject: 'home'}) 
    this.bodyScrollBar.scrollTo(0, 0, 0);
  }

  UpdateFirstPassage(section){ this.setState({ isFirstPassage: {[section]: false }})}
  scrollIntoViewHandler(target){ this.bodyScrollBar.scrollIntoView(target) }
  toggleScroll(scrollingActive){ this.bodyScrollBar.updatePluginOptions('modal', { open: false })}
  setNumberOfProjects(numberOfProjects){ this.setState({ numberOfProjects: numberOfProjects }) }
  
  componentDidMount(){


    // Setting Up Smooth Scrollbar

    Scrollbar.use(ModalPlugin, /* OverscrollPlugin */);
    this.bodyScrollBar = Scrollbar.init(document.querySelector(".scrollable"), {damping: 0.1, renderByPixels: true})
    this.bodyScrollBar.track.yAxis.element.remove();

    this.bodyScrollBar.updatePluginOptions('modal', { open: false }); //Debug

    ScrollerProxy(this.bodyScrollBar);

    if(this.state.currentProject === null)
      FixedElements(this.bodyScrollBar, document.querySelector('.header'));
    FixedElements(this.bodyScrollBar, document.querySelector('.navigation'));


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
                          (this.state.currentProject === "home") ? (
                            <HomePage setNumberOfProjects={this.setNumberOfProjects}
                                      
                                      currentProject={this.state.currentProject}  
                                      SwitchProjectId={this.SwitchProjectId} 

                                      isFirstPassage={this.state.isFirstPassage}
                                      UpdateFirstPassage={this.UpdateFirstPassage}

                                      toggleScroll={this.toggleScroll}
                                      />
                          ):( 
                            <Project  numberOfProjects={this.state.numberOfProjects}
                                      currentProject={this.state.currentProject} 
                                      SwitchProjectId={this.SwitchProjectId} 
                                      scrollIntoView={this.scrollIntoViewHandler}/>
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
