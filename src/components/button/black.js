import PropTypes from 'prop-types';

function BlackButton({text, callback}){
   return(
      <>
      <button onClick={()=>callback()} className="black-button">{text}</button>
         <style>
            {`
            .black-button{
               width:12em;
               padding: 15px 10px;
               text-align:center;
               background-color:black;
               color:white;
               cursor:pointer;
               border:none !important;
               border-radius:10px;
               font-weight:bold;
            }
            .black-button:hover{
               opacity:0.6
            }
            `}
         </style>
      </>
   )
}

BlackButton.propTypers={
   text:PropTypes.string,
   callback:PropTypes.func,
}
export default BlackButton;