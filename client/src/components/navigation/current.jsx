//React
import React  from 'react';

//GSAP
import ElementIn from '../../animations/in/element-in.js'

class Current extends React.Component {
   constructor(props) {
      super(props);

      this.currentProject = React.createRef();
    }

   componentDidMount(){
      ElementIn('.current__title')
   }
   
  render() {
    return (
      <div className="navigation__current">
         <div className="info-heading__container">
            <span ref={this.currentProject}  className="current__title info-heading info-heading--bold">
            {this.props.currentProject.Name}
            </span>
         </div>
         <div className="info-heading__container">
            <span ref={this.currentProject}  className="current__title info-heading">
            {this.props.currentProject.Date}
            </span>
         </div>
      </div>
    )
  }
}

export default Current;
