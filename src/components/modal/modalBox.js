import PropTypes from 'prop-types';
import CloseButton from '../button/close';

function ModalBox({props, open, children, close}){
   return(
      <div data-testid="modal-test" style={{
         width:'100%',
         height:'100vh',
         backgroundColor:'rgb(0 0 0 / 10%)',
         position:'absolute',
         top:'0px',
         right:'0px',
         left:'0px',
         bottom:'0px',
         zIndex:1000,
         display: open? 'block':'none'
      }}>
         <div style={{
            width:'100%',
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
         }}>
            <CloseButton title="Close Modal Window" callback={close} />
            <div style={{
               borderRadius:'10px',
               backgroundColor:'white',
               ...props
            }}>
               {children}
            </div>
         </div>
      </div>
   )
}
ModalBox.propTypes={
   props:PropTypes.object,
   open:PropTypes.bool,
   close:PropTypes.func,
   children:PropTypes.any
}
export default ModalBox;