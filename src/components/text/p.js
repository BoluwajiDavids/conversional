import PropTypes from 'prop-types';

function Paragraph({text}){
   return (
      <p style={{
         fontSize:'14px',
         color:'gray',
         fontWeight:500,
      }}>
         {text}
      </p>
   )
}
Paragraph.propTypes={
   text:PropTypes.string
}
export default Paragraph;