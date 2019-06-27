import React from 'react'; 


const Scroll = (props) => {
	return (
		<div style={{border:'1px black', overflowY:'scroll', overflowX:'hidden',height:'600px'}}>
			{props.children}
		</div>
	)
}

export default Scroll;