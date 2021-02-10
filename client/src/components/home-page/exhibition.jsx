import React, { useEffect, useState, Component } from 'react'
import Axios from 'axios';

//Transitions
import ElementScrolltrigger from '../../animations/scrolltrigger/element-in.js'
import LineIn from '../../animations/scrolltrigger/line-in.js'

class Exhibition extends Component {
   constructor(props) {
      super(props);
  
      //Database Entries
      this.state = {
        exhibitions: [],
        locations: []
      };

      //UI Elements
      this.exhibition = {
         name: [],
         date: [],
         location: [], 
         line: [],
         trigger: null
      }
   }

   componentDidMount() {
      // Database Requests
      Axios
        .get('http://localhost:3006/api/exhibition')
        .then(res => { this.setState({ exhibitions: res.data }) })
        .catch(e => console.log(e));

       Axios
       .get('http://localhost:3006/api/location')
       .then(res => { this.setState({ locations: res.data }) })
       .catch(e => console.log(e));


    }

    componentDidUpdate(preProps, preState){
         if (this.state.exhibitions !== preState.exhibitions && this.props.isFirstPassage.exhibition) {
            
            

           
            for (let i = 0; i < this.state.exhibitions.length; i++) {
               console.log(this.exhibition.location[i])
               ElementScrolltrigger([this.exhibition.name[i], this.exhibition.date[i], this.exhibition.location[i]], this.exhibition.trigger, this.props.UpdateFirstPassage, "exhibition")
               ElementScrolltrigger(this.exhibition.location[i], this.exhibition.trigger)
               LineIn(this.exhibition.line[i], this.exhibition.trigger, 3);
            }
      }
   }
   
   render() {
      return (
      <React.Fragment>
         <section className="exhibition container"  ref={exhibition => (this.exhibition.trigger = exhibition)}>


            <div className="row">
               <div className="col-1-of-1--no-margin">
                  <div className="info-heading__container">
                     <span className="exhibition__title info-heading">Exhibitions</span>
                  </div>
               </div>
            </div>
            <hr className="exhibition__line line--hair"/>

            {this.state.exhibitions.map((exhibition, i) => (
               <React.Fragment>   
               <div className="row" key={i}>
                  <div className="col-1-of-2--no-margin">
                     <div className="info-heading__container">
                        <span ref={exhibition => (this.exhibition.name[i] = exhibition)} 
                              className="exhibition__element info-heading info-heading--uppercase info-heading--bold">
                           {exhibition.name}
                        </span>
                        <span ref={exhibition => (this.exhibition.date[i] = exhibition)} 
                              className="exhibition__element info-heading">
                           {" / " + exhibition.date}
                        </span>
                     </div>
                  </div>
                  <div className="col-1-of-2--no-margin text-align-right">
                     <div className="info-heading__container">
                        <div className="exhibition__element">
                        <span ref={exhibition => (this.exhibition.location[i] = exhibition)} className="info-heading">
                           {this.state.locations.map( location => location.exhibition_num === exhibition.id && location.city + ", " + location.country )}
                        </span>
                        </div>
                     </div>
                  </div>
               </div>
               <hr ref={exhibition => (this.exhibition.line[i] = exhibition)} className="exhibition__line line--hair"/>
               </React.Fragment>
            ))}
            <div className="large-spacing" />
         </section>
        
      </React.Fragment>
   )
}}

export default Exhibition;
