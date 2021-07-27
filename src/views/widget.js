import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ModalBox from '../components/modal/modalBox';
import findComponent from '../utils/findComponent';

/*
Assumptions
1. I'm assuming that the data object will always have Content and Children
2. Content represent customization for the main widget container.
3. I'm assuming that any data that requires a modal view will always have a Modal property and that property will be an object with the same structure as the one in the data provided.
4. Since this was not exclusively specified, I am assuming that regardless of nesting dept(i.e how many times we have children down the line), the presentation will always be linear (one after the other). If we keep nesting boxes within boxes (as in BoxComponent), we will soon be out of space to show anything. So after rendering the first BoxComponent, subsequent BoxComponent in the data will be ignored.
5. I am also assuming that object keys (such as MainPage, MainButton, etc) are not expected to show in the view.
Generally, a more optimized solution can be sort when more scenarios and edge cases are considered. What is provided below is strictly based on the data structure provided. I didn't account for edge cases with deep nesting (we could probably solve that with recursion)
*/

function Widget({data}){
   const [modalOpen, setModalOpen] = useState(false);
   const {Content, Children} = data; 
   const BoxComponent = findComponent(Content.type);
   const hasModal = Children.hasOwnProperty("Modal");
return(
   <>
   {hasModal ?
   <ModalBox 
      open={modalOpen}
      close={()=>setModalOpen(false)}
      props={Children.Modal.Content.props}
       >
      {
      Object.entries(Children.Modal.Children).map((item, index)=>{
         var Component = findComponent(item[1].Content.type);
         return(
            <Component key={index} {...item[1].Content.props} />
         )
      })
      }
   </ModalBox>
   :null}
   <BoxComponent props={Content.props} width={85}>
      <br/>
      {
      hasModal ?
      Object.entries(Children.MainPage.Children).map((item, index)=>{
         var Component = findComponent(item[1].Content.type);
         return(
            <Component key={index} 
            callback={ item[1].Content.activateModal ? ()=>setModalOpen(true): ()=>console.log("Callback called")} 
            {...item[1].Content.props} />
         )
      })
      :
      Object.entries(Children).map((item, index)=>{
         var Component = findComponent(item[1].Content.type);
         return(
            <Component key={index} {...item[1].Content.props} />
         )
      })
      }
   </BoxComponent>
   </>
)
}

Widget.propTypes={
   data:PropTypes.object
}
export default Widget;
