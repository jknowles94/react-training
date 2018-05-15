import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {

  return (
    <div onClick={props.delete} className="char-component">
      {props.input}
    </div>
  )
};

export default CharComponent;