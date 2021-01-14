import ElementIn from '../transtitions/element-in.js';
import ImageIn from '../transtitions/image-in.js';
import LineIn from '../transtitions/line-in.js';

const WorkAnimations = (references) => {
   for(let i = 0 ; i < references.name.length; i++){
      LineIn(references.line[i], references.trigger[i], 3.2);
      ImageIn(references.image[i], references.trigger[i])
      ElementIn(references.name[i], references.trigger[i])
      ElementIn(references.date[i], references.trigger[i])
   }
   //
   
   //ElementIn('#work-item-' + i + ' .work-item__tag', references.trigger)
   
}

export default WorkAnimations;