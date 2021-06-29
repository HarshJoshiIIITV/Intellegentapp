import React, { Component } from 'react';
import IMAGE from '../IMAGE/IMAGE';
import axios from 'axios';
class APPAREL extends Component {
	render() {
		const { resp } = this.props;

		return (
			<div
				className='color_grad2'
				style={{
					margin: '10px',
					padding: '5px',
					textAlign: 'center',
					borderRadius: '4px',
					boxShadow: '0px 12px 6px -6px rgba(255,255,255,0.5)',
				}}
			>
				{resp &&
					resp.map((response, i) => {
						return (
							<div
								key={i}
								style={{
									background: 'rgba(0,0,0,0.4)',
									margin: '8px',
									padding: '6px',
									borderRadius: '10px',
								}}
							>
								<div
									style={{ display: 'flex', justifyContent: 'space-between' }}
								>
									<p
										style={{
											margin: '0',
										}}
									>
										{response.data.concepts[0].name.toUpperCase()}
									</p>
									<p style={{ margin: '0' }}>
										{(response.data.concepts[0].value * 100)
											.toString()
											.substring(0, 5)}
										%
									</p>
								</div>
							</div>
						);
					})}
			</div>
		);
	}
}

export default APPAREL;
