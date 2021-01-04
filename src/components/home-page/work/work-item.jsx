import React  from 'react';

class WorkItem extends React.Component {

  render() {
    return (
       <React.Fragment>
         <article className="work-item row">
            <div className="col-3-of-11--no-margin">
               <div className="work-item__image__container">
                  <img className="work-item__image" alt=""  src={require('../../../assets/images/'+ this.props.image).default} />
               </div>
            </div>
            <div className="col-8-of-11--no-margin">
               <div className="work-item__info">
                  <div className="work-item__tag__container">
                  {
                     this.props.tags.map((value, index) => {
                        return <div key={index} className="work-item__tag info-heading">{value}</div>
                  })}
                  </div>
                  <div className="info-heading__container">
                     <span className="work-item__date info-heading">{this.props.date}</span>
                  </div>
                  <div className="secondary-heading__container">
                     <span className="work-item__name secondary-heading">{this.props.name}</span>
                  </div>
               </div>
            </div>
         </article>
         <hr className="work__line line--thin" />
      </React.Fragment>
    )
  }
}

export default WorkItem;
