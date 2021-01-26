
function OpenTypeSelection(letter){

   let letterList;

   switch(letter.innerHTML){
   case "a":
      letterList =  [1, 2, 4, 5];
      break;
   case "p":
      letterList = [1, 7];
      break;
   case "b":
      letterList = [1, 7];
      break;
   case "c":
       letterList = [1, 11];
       break;
   case "d":
       letterList = [7];
       break;
   case "e":
       letterList = [2, 4, 5, 7];
       break;
   case "f":
       letterList = [4, 5, 7, 11];
       break;
   case "g":
       letterList = [1, 4, 11];
       break;
   case "h":
       letterList = [4, 7];
       break;
   case "l" :
       letterList = [11];
       break;
   case "z":
       letterList = [11];
       break;
   case "n":
       letterList = [2];
       break;
   case "o":
       letterList = [1];
       break;
   case "r":
       letterList = [5, 7];
       break;
   case "s":
       letterList = [1];
       break;
   case "t":
       letterList = [ 5, 7];
       break;
   case "u":
       letterList = [1];
       break;
   case "i":
      letterList = [11];
      break;
   case "w":
       letterList = [2, 11];
       break;
   default:
       letterList = [1, 2, 5, 7, 11];
   }

   return letterList
}

export default OpenTypeSelection;