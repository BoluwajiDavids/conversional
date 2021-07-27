import PropTypes from 'prop-types';

function Link({url, text, callback}){
   const handleClick=(e)=>{
      e.preventDefault();
      callback(); //Comment out this line to prevent opening the modal
      if(!url || url==null){ return; }
      window.open(url, "_blank"); //Comment out this link to prevent opening the link
   }
   return(
   <div style={{padding:'10px'}}>
      <a href="#open-link" style={{textDecoration:'none', color:'black'}} onClick={handleClick}>
         {text}
      </a>
   </div>
   )
}

Link.propTypes={
   url:PropTypes.string,
   text:PropTypes.string,
   callback:PropTypes.func,
}
export default Link;