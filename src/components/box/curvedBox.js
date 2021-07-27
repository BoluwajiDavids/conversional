import PropTypes from 'prop-types';
/*
From the data structure received, the style of this box could be provided directly by the partner, and we could spread it into the style object as shown below.
However, I added two additional props and a local style for the purpose of this demo.
Also, part of the requirement is a visible border. It is provided here directly, but it is better to provide some autofill value before a partner override to suite their needs. This will help to prevent style conflict.
*/
function CurvedBox({props, width, shadow, children}){
return(
   <div style={{
      width:width? width+"%" : "50%",
      boxShadow:shadow? " 0 1.25rem 7.375rem rgba(90,97,105,.1)" : null,
      backgroundColor:"#fff",
      borderColor:'#d6d6d6',
      borderWidth:'2px',
      borderStyle:'solid',
      borderRadius:'10px',
      overflow:'hidden',
      ...props
      }}>
      {children}
   </div>
)
}

CurvedBox.propTypes = {
   props: PropTypes.object,
   width: PropTypes.number,
   shadow: PropTypes.bool,
   children: PropTypes.any,
 };

export default CurvedBox;
