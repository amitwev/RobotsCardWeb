import React from 'react'; 

const Card = (props) => {
	const {name, email, id} = props;
	return (
		<div className = "tc bg-light-green dib br3 ma2 grow bw2 shadow5">
			<img alt ='Robots' src={`https://robohash.org/${id}`}/>
			<div>
				<h1>{name}</h1>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;