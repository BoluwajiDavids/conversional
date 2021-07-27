import React from 'react';
import BgBox from '../components/box/bgBox';
import CurvedBox from '../components/box/curvedBox';
import {H2} from '../components/headers';
import Paragraph from '../components/text/p';
import BlackButton from '../components/button/black';

function Welcome({open}){
   return(
      <BgBox>
         <CurvedBox shadow={true} width={60}>
            <div align="center" style={{padding:'10px'}}>
               <H2 text="Welcome to Conversional" />
               <Paragraph text="Please click on the button below to view a demo of our widget" />
               <br/>
               <BlackButton text="Open Widget" callback={open} />
            </div>
         </CurvedBox>
      </BgBox>
   )
}

export default Welcome;