import PropTypes from 'prop-types';

/*
This components helps us switch between the two data set. 
The function is of course just based on the current need of the demo.
*/

function TabBox({items, callback}){
   return(
      <div style={{
         width:'100%',
         display:'flex',
         justifyContent:'flex-start',
         alignItems:'center',
         borderBottom:"2px solid #d6d6d6"
      }}>
         {items && items.map((item, index)=>(
            <div 
               key={index} onClick={()=>callback(item.data)} 
               title={"Switch widget view to "+item.name}
               className={item.active ? "tab-item-active":"tab-item"}>
               {item.name}
            </div>
         ))}
         <style>
            {`
            .tab-item-active{
               background-color:black;
               color:white;
               padding: 8px 15px;
               font-size:16px;
               font-weight:500;
               border-bottom:3px solid black;
               cursor:pointer;
            }
            .tab-item-active:hover{
               background-color:white;
               color:black;
               border-bottom:3px solid black;
            }
            .tab-item{
               background-color:white;
               color:black;
               padding: 8px 15px;
               font-size:16px;
               font-weight:500;
               border-bottom:3px solid white;
               cursor:pointer;
            }
            .tab-item:hover{
               background-color:black;
               color:white;
               border-bottom:3px solid white;
            }
            `}
         </style>
      </div>
   )
}

TabBox.propTypes={
   items:PropTypes.array,
   callback:PropTypes.func,
}

export default TabBox;