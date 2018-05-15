import React from 'react';

const Validation = (props) => {

  let Val = "Text too short!";

  if(props.length >= 5) {
    Val = "Text long enough!";
  }

  return (
    <div>
      <p>{Val}</p>
    </div>
  )
};

export default Validation;