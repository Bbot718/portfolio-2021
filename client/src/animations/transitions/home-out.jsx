import gsap from 'gsap';
import { Timeline } from 'gsap/gsap-core';
import { SplitText } from 'gsap/all';

const HomeOut = (id, props) => {
   const duration = .8;
   //Project Out
   for(let i =0; i < this.state.projects.length; i++){
     gsap.to(this.project.image[i], { scaleY: 1, duration: duration }) //Image Out
     gsap.to('.animation-complete', {y: '-100%', duration: duration}); //Date Out
   }
   gsap.to(['.line--thick', '.line--thin'], {width: 0, duration:duration})
   gsap.to(['.navigation__item', '.navigation__selected'], { y: '-100%', duration: duration,  onComplete:() => {
     this.props.switchPage(this.state.projects[id]);
   }})
}

export default HomeOut;