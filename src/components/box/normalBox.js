import PropTypes from 'prop-types';
/*
The comments provided for curvedBox.js also applies here
*/
function NormalBox({props, width, shadow, children}){ 
   return(
      <div style={{
         ...props,
         width:width? width+"%" : "50%",
         boxShadow:shadow? " 0 1.25rem 7.375rem rgba(90,97,105,.1)" : null,
         backgroundColor:"#fff",
         borderColor:'#d6d6d6',
         //borderWidth:'2px',
         borderStyle:'solid',
         
         }}>
         {children}
      </div>
   )
   }
NormalBox.propTypes = {
      props: PropTypes.object,
      width: PropTypes.number,
      shadow: PropTypes.bool,
      children: PropTypes.any,
    };
   export default NormalBox;
   