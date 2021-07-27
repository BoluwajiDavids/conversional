import PropTypes from 'prop-types';

function CloseButton({callback, title}){
   return(
      <>
      <button title={title || "Close widget"} onClick={()=>callback()} className="close-button">X</button>
         <style>
            {`
            .close-button{
               width:4em;
               height:4em;
               position:absolute;
               top:50px;
               right:40px;
               padding: 15px 10px;
               text-align:center;
               background-color:white;
               color:black;
               cursor:pointer;
               border:1px solid #d6d6d6;
               border-radius:2em;
               font-weight:bolder;
               font-size:1em;
            }
            .close-button:hover{
               opacity:0.6
            }
            `}
         </style>
      </>
   )
}

CloseButton.propTypers={
   callback:PropTypes.func,
}
export default CloseButton;