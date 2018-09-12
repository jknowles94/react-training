import React from 'react';

const Cockpit = (props) => {
	const style = {
    backgroundColour: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

	return (
		<div>
			<h1>This is my app</h1>
	    <button 
	    style={style}
	    onClick={props.toggle}
	    >Toggle</button>
    </div>
	);
};

export default Cockpit;