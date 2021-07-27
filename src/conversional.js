import React from 'react';
import Welcome from './views/welcome';
import WidgetBox from './views/widgetBox';

class Conversional extends React.Component{
   constructor(props){
      super(props);
      this.state={
         openWidget:false,
      }
   }
   openWidget= ()=> this.setState({openWidget:true});
   closeWidget = () => this.setState({openWidget:false});

   render(){
      return(
         <>
         {
            this.state.openWidget ? 
               <WidgetBox close={this.closeWidget} />
               :
               <Welcome open = {this.openWidget} />
         }
         </>
      )
   }
}

export default Conversional;