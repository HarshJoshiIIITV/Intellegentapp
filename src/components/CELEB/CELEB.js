import React, { Component } from 'react';
import CELEB_DETAIL from './CELEB_DETAIL';

class CELEB extends Component {
	render() {
		const { resp } = this.props;
		console.log(resp);
		const name = resp[0].data.concepts[0].name;
		const value = resp[0].data.concepts[0].value;

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
						return (
							<div
								style={{
									background: 'rgba(0,0,0,0.4)',
									margin: '8px',
									padding: '5px',
									borderRadius: '10px',
								}}
							>
								<CELEB_DETAIL resp={response} />
							</div>
						);
					})}
			</div>
		);
	}
}

export default CELEB;
