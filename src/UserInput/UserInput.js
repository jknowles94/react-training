import React from 'react';

const UserInput = (props) => {
  const style = {
    width: "300px",
    border: "0",
    boxShadow: "0 2px 3px #ccc",
    padding: "5px 10px"
  }

  return (
    <div>
      <input type="text" style={style} onChange={props.changed} value={props.username}/>
    </div>
  )
};

export default UserInput;