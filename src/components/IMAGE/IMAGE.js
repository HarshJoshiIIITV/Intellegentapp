import React, { Component } from 'react';
import IMAGEBOX from './IMAGEBOX';

class IMAGE extends Component {
	constructor() {
		super();
	}
	render() {
		const { source, resp, target } = this.props;
		const alter = 'INCORRECT URL';
		return (
			<div style={{ margin: '10px', position: 'relative' }}>
				<img
					id='input_image'
					src={source}
					alt={alter}
					width='100%'
					height='auto'
				/>
				{resp != 'no' &&
					target != 'Predict Color' &&
					target != 'Predict NSFW' &&
					resp.map((resp_box, i) => {
						return <IMAGEBOX key={i} single_resp={resp_box} />;
					})}
			</div>
		);
	}
}

export default IMAGE;
