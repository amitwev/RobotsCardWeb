import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
	return (
		<div >
			<input 
				type='search' 
				placeholder='Search Robots' 
				className='mt1 mb4 pa3 b--green bg-lightest-blue'
				onChange={searchChange}
			/>
		</div>
	);

}

export default SearchBox;