import React  from 'react';

import Navigation from './navigation';

class Header extends React.Component {

  render() {
    return (
      <div className={'header header--'+ this.props.theme}>
         <div className="container container--full-width">
            <div className="row">
               <div className="col-3-of-14">
                  <div className="header__sidebar"><Navigation /></div>
               </div>
               <div className="col-11-of-14">
                  <div className="header__main container">
                     <div className="row">
                        <div className="col-12-of-12">
                           <div className="header__content">
                           <span className={"header-heading header-heading--"+ this.props.theme}>Hello Friend,</span>
                           </div>
                        </div>
                     </div>
                     <div className="row">+
                        <div className="col-12-of-12">
                           <div className="header__content"> 
                              <span className={"header-heading header-heading--"+ this.props.theme}>I'm Ben, a Passionate</span> 
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-4-of-12" />
                        <div className="col-8-of-12">
                           <div className="header__content"> 
                              <span className={"header-heading header-heading--"+ this.props.theme}>Interaction</span> 
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-4-of-12" />
                        <div className="col-8-of-12">
                           <div className="header__content"> 
                              <span className={"header-heading header-heading--"+ this.props.theme}>Designer</span> 
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-12-of-12">
                           <div className="header__content"> 
                              <span className={"header-heading header-heading--"+ this.props.theme}>Based in Lausanne</span> 
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-12-of-12">
                           <div className="header__content"> 
                              <span className={"header-heading header-heading--"+ this.props.theme}>Switzerland</span> 
                           </div>
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

export default Header;
