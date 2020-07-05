import React, { Component } from 'react';
import './NSFW.css';

class NSFW extends Component {
	render() {
		const { resp } = this.props;
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
								<div
									style={{ display: 'flex', justifyContent: 'space-between' }}
								>
									<p
										style={{
											margin: '0',
										}}
									>
										{response.name.toUpperCase()}
									</p>
									<p style={{ margin: '0' }}>
										{(response.value * 100).toString().substring(0, 5)}%
									</p>
								</div>
							</div>
						);
					})}
			</div>
		);
	}
}

export default NSFW;
