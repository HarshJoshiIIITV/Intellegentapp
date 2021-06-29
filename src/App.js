import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';

import './App.css';
import Home from './components/Home';
import HELLO from './components/HELLO/HELLO';
const particlesOptions = {
	particles: {
		number: {
			value: 30,
			density: {
				enable: true,
				value_area: 800,
			},
		},
	},
};
class App extends Component {
	constructor() {
		super();
		this.state = {
			id: null,
			entries: null,
		};
	}
	changeRoute = (id, entries) => {
		this.setState({
			id: id,
			entries,
		});
	};
	render() {
		return (
			<div className='App'>
				<Particles className='particles' params={particlesOptions} />
				{!this.state.id ? (
					<HELLO changeRoute={this.changeRoute} />
				) : this.state.id ? (
					<Home
						changeRoute={this.changeRoute}
						id={this.state.id}
						entries={this.state.entries}
					/>
				) : (
					<h1>no correct route</h1>
				)}
			</div>
		);
	}
}

export default App;
