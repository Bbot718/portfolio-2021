import React  from 'react';
import WorkItem from './work-item';

class Work extends React.Component {

  render() {
    return (
      <section className="work">
        <div className="primary-heading__container">
          <span className="work__title primary-heading">
            Selected Work
          </span>
        </div>
        <hr className="work__line line--thick" />

        <div className="container">
          <WorkItem  
            id="0"
            date="2019"
            name="Camel Air Paint"
            image="cap_detailed.png"
            tags={['Virtual Reality','Unity']}  />
          <WorkItem  
            id="1"
            date="2016"
            name="Meko"
            image="meko_detailed.png"
            tags={['Game Design','Unity']} />
          <WorkItem  
            id="2"
            date="2016"
            name="Pong"
            image="pong_detailed.png"
            tags={['Arduino','OpenFrameworks']} />
          <WorkItem  
            id="3"
            date="2015"
            name="Thymio"
            image="mp_detailed.png"
            tags={['Raspberry Pi','Internet of Things']} />
          <WorkItem  
            id="4"
            date="2015"
            name="Moody Printer"
            image="mp_detailed.png"
            tags={['Raspberry Pi','Internet of Things']} />
          <WorkItem
            date="2013"
            name="Slice"
            image="slices_detailed.png"
            tags={['Processing','Unity']} />
        </div>
      </section>
    )
  }
}

export default Work;
