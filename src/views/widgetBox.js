import React, {useState} from 'react';
import PropTypes from 'prop-types';
import BgBox from '../components/box/bgBox';
import CurvedBox from '../components/box/curvedBox';
import CloseButton from '../components/button/close';
import TabBox from '../components/box/tabBox';
import Paragraph from '../components/text/p';
import Widget from './widget';

//Data
const data1 = require("../data/data1.json");
const data2 = require("../data/data2.json");

function WidgetBox({close}){
   const [active, setActive] = useState(null);
   const updateActive=(data)=>setActive(data);
   const getList=()=>{
      var list = [];
      //I am manually constructing the array here. This shouldn't be the case in a normal workflow. I'm only doing this because I want to be able to switch between the two data sets provided.
      list.push({name:"Data set 1", active:active === data1 ? true : false, data:data1});
      list.push({name:"Data set 2", active:active === data2 ? true : false, data:data2});
      return list;
   }
   return(
      <BgBox>
         <CloseButton callback={close} />
         <CurvedBox>
            <TabBox items={getList()} callback={updateActive} />
            {
            active == null ? 
               <div align="center">
                  <Paragraph text="Please select any of the options above" />
               </div>
            :
            <div align="center" style={{padding:"15px 10px"}}>
               <Widget data={active} />
            </div>
            }
         </CurvedBox>
      </BgBox>
   )
}
WidgetBox.propTypes={
   close:PropTypes.func,
}
export default WidgetBox;