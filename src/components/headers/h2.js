import React from 'react';
import PropTypes from 'prop-types';

function H2({text}){
   return (
      <h2>{text}</h2>
   )
}

H2.propTypes = {
   text: PropTypes.string
 };

export default H2;