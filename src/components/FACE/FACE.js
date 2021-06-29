import React, { Component } from 'react';
import IMAGE from '../IMAGE/IMAGE';
class FACE extends Component {
	render() {
		const { resp } = this.props;
		// console.log(resp);
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
				<div
					style={{
						background: 'rgba(0,0,0,0.4)',
						margin: '8px',
						padding: '5px',
						borderRadius: '10px',
					}}
				>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<p
							style={{
								margin: '0',
							}}
						>
							Found
						</p>
						<p style={{ margin: '0' }}>{resp.length} face(s)</p>
					</div>
				</div>
			</div>
		);
	}
}

export default FACE;
