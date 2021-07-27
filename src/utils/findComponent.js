//import NormalBox from '../components/box/normalBox';
import CurvedBox from '../components/box/curvedBox';
import {H1, H2} from '../components/headers';
import List from '../components/list/list';
import Paragraph from '../components/text/p';
import Link from '../components/link/link';
import Button from '../components/button/button';


function findComponent(type){
   var component;
   switch(type){
      case "BoxComponent": component = CurvedBox; break; //un-comment & use normalbox if the border-radius is not desired.
      case "H1Component": component = H1; break;
      case "H2Component": component = H2; break;
      case "ListComponent": component = List; break;
      case "ParagraphComponent": component = Paragraph; break;
      case "LinkComponent": component = Link; break;
      case "ButtonComponent": component = Button; break;
      default: component = <div></div>;
   }
   return component
}

export default findComponent;