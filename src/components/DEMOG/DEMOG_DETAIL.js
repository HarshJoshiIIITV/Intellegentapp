import React, { Component } from 'react';

class DEMO_DETAIL extends Component {
	predict_age = (resp) => {
		for (var i = 0; i < resp.length; i++) {
			if (resp[i].vocab_id == 'age_appearance')
				return {
					name: resp[i].name,
					value: resp[i].value,
				};
		}
	};
	predict_gender = (resp) => {
		for (var i = 0; i < resp.length; i++) {
			if (resp[i].vocab_id == 'gender_appearance')
				return {
					name: resp[i].name,
					value: resp[i].value,
				};
		}
	};
	predict_cultural = (resp) => {
		for (var i = 0; i < resp.length; i++) {
			if (resp[i].vocab_id == 'multicultural_appearance')
				return {
					name: resp[i].name,
					value: resp[i].value,
				};
		}
	};

	render() {
		const { resp } = this.props;
		const age = this.predict_age(resp.data.concepts).name;

		const val1 = this.predict_age(resp.data.concepts).value;
		const gender = this.predict_gender(resp.data.concepts).name;

		const val2 = this.predict_gender(resp.data.concepts).value;
		const culture = this.predict_cultural(resp.data.concepts).name;
		const val3 = this.predict_cultural(resp.data.concepts).value;

		return (
			<div
				style={{
					background: 'rgba(0,0,0,0.4)',
					margin: '8px',
					padding: '5px',
					borderRadius: '10px',
				}}
			>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<p style={{ margin: '0' }}>Age is {age}</p>
					<p style={{ margin: '0' }}>
						{(val1 * 100).toString().substring(0, 5)}%
					</p>
				</div>

				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<p style={{ margin: '0' }}> Gender is {gender}</p>
					<p style={{ margin: '0' }}>
						{(val2 * 100).toString().substring(0, 5)}%
					</p>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<p style={{ margin: '0' }}> Culture is {culture}</p>
					<p style={{ margin: '0' }}>
						{(val3 * 100).toString().substring(0, 5)}%
					</p>
				</div>
			</div>
		);
	}
}

export default DEMO_DETAIL;
