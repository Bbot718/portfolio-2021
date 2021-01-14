import React  from 'react';

class Header extends React.Component {

  render() {
    return (
      <div className={'header header--'+ this.props.theme}>
                     
                  <div className="header__main container">
                     <div className="row">
                        <div className="col-1-of-1">
                           <div className="header__title__container">
                           <span className={"header__title header-heading header-heading--"+ this.props.theme}>Hello Friend,</span>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-1-of-1">
                           <div className="header__title__container"> 
                              <span className={"header__title header-heading header-heading--"+ this.props.theme}>I'm Ben, a Passionate</span> 
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-1-of-3" />
                        <div className="col-2-of-3">
                           <div className="header__title__container"> 
                              <span className={"header__title header-heading header-heading--"+ this.props.theme}>Interaction</span> 
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-1-of-3" />
                        <div className="col-2-of-3">
                           <div className="header__title__container"> 
                              <span className={"header__title header-heading header-heading--"+ this.props.theme}>Designer</span> 
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-1-of-1">
                           <div className="header__title__container"> 
                              <span className={"header__title header-heading header-heading--"+ this.props.theme}>Based in Lausanne</span> 
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-1-of-1">
                           <div className="header__title__container"> 
                              <span className={"header__title header-heading header-heading--"+ this.props.theme}>Switzerland</span> 
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
    )
  }
}

export default Header;
