import React, { Component } from 'react';
import CardComponents from './CardComponents'
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
import './Scroll.css';

class App extends Component {
	constructor(){
		super()
		this.state ={
			robots: [], 
			searchField: ''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users =>this.setState({robots: users}));
	}
	onSearchChange = (event) => {
		this.setState({searchField: event.target.value })
	}
	render(){
		const filterRobot = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1 className='f1 title'>RobotFriends</h1> 
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardComponents robots={filterRobot} />
				</Scroll>	
			</div>
		);
	}
}

export default App;