import PropTypes from 'prop-types';
/*
Since this wasn't specifically state, I'm using unordered list.
If we want to control whether to show bullets or not, we can include a showBullet props 
*/
function List({li}){
   return(
      <ul style={{textAlign:'left'}}>
         {li.map((item, index)=>
            <li style={{
               fontSize:'16px',
               fontWeight:500,
            }}
            key={index}>{item}</li>
         )}
      </ul>
   )
}
List.propTypes={
   li:PropTypes.array,
}

export default List;