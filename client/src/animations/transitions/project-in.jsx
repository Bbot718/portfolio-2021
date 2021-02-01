import gsap from 'gsap';
import { Timeline } from 'gsap/gsap-core';
import { SplitText } from 'gsap/all';

const ProjectIn = () => {
   const paragrapheSTContainer = new SplitText('.project__paragraphe', {type: "lines", linesClass: 'project__paragraphe__container' })
   const paragrapheST = new SplitText('.project__paragraphe', {type: "lines" })
   const paragrapheLines = paragrapheST.words;

    //Project In
    const timeline = new Timeline( {delay: 2} );
    timeline.from('.project__title__line', { width: 0 });
    timeline.to('.project__video__hidder', {scaleY: 0 })
    timeline.from('.project__title', { y: '100%' })
    timeline.from('.project__selection__controls', { y: '110%' })
    timeline.from('.project__line', { width: 0 });
    timeline.from(paragrapheLines, { y: '100%', stagger: 1 });
}

export default ProjectIn;