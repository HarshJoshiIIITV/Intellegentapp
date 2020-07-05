import React, { Component } from 'react';
import IMAGE from '../IMAGE/IMAGE';
import DEMOG_DETAIL from './DEMOG_DETAIL';

class DEMOG extends Component {
	render() {
		const { resp } = this.props;
		console.log(resp);

		return (
			<div
				className='color_grad2'
				style={{
					margin: '10px',
					padding: '6px',
					textAlign: 'center',
					borderRadius: '4px',
					boxShadow: '0px 12px 6px -6px rgba(255,255,255,0.5)',
				}}
			>
				{resp &&
					resp.map((response) => {
						return <DEMOG_DETAIL resp={response} />;
					})}
			</div>
		);
	}
}

export default DEMOG;
