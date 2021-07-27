import React from 'react';
import PropTypes from 'prop-types';

function H1({text}){
   return (
      <h1>{text || null}</h1>
   )
}

H1.propTypes = {
   text: PropTypes.string
 };

export default H1;