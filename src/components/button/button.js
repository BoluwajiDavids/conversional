import PropTypes from 'prop-types';

function Button({text, callback}){
   const handleClick=()=>{
      console.log("Button clicked");
      callback()
   }
   return(
      <>
      <button onClick={handleClick} className="button">{text}</button>
         <style>
            {`
            .button{
               width:17em;
               padding: 10px 8px;
               text-align:center;
               background-color:#ead1d1;
               color:black;
               cursor:pointer;
               border:none !important;
               border-radius:10px;
               font-weight:bold;
            }
            .button:hover{
               opacity:0.8
            }
            `}
         </style>
      </>
   )
}

Button.propTypers={
   text:PropTypes.string,
   callback:PropTypes.func,
}
export default Button;