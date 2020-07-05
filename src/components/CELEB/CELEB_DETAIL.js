import React, { Component } from 'react';

class CELEB_DETAIL extends Component {
	render() {
		const { resp } = this.props;
		console.log('in CLEB DETAIL', resp);
		let name = null;
		let value = null;
		if (resp) {
			name = resp.data.concepts[0].name;
			value = resp.data.concepts[0].value;
		}
		return (
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<p
					style={{
						margin: '0',
					}}
				>
					{name.toUpperCase()}
				</p>
				<p style={{ margin: '0' }}>
					{(value * 100).toString().substring(0, 5)}%
				</p>
			</div>
		);
	}
}

export default CELEB_DETAIL;
