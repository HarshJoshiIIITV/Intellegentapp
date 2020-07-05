import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

class Signup extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
		};
	}
	onchange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
		document.getElementById('error_signup').innerHTML = '';
	};
	onSubmit_doc = () => {
		axios
			.post(
				'https://marvelous-virgin-islands-69275.herokuapp.com/signup',
				this.state
			)
			.then((resp) => {
				console.log(resp.data);
				this.props.changeRoute(resp.data.id, resp.data.entries);
			})
			.catch((err) => {
				document.getElementById('error_signup').innerHTML =
					'<p style="margin:0px;color:red">Signup error</p>';
			});
	};
	render() {
		return (
			<div
				style={{
					marginTop: '30px',
					padding: '15px',
					background: 'rgba(0,0,0,0.3)',
					borderRadius: '8px',
				}}
			>
				{' '}
				<p
					style={{
						fontSize: '24px',
						textAlign: 'center',
						marginBottom: '5px',
					}}
				>
					Register Now{' '}
				</p>
				<input
					placeholder='Name'
					required
					type='text'
					name='name'
					onChange={this.onchange}
					className='input_helloy'
					style={{ display: 'block', width: '100%', marginTop: '15px' }}
				/>
				<input
					required
					type='text'
					name='email'
					onChange={this.onchange}
					placeholder='Email Id'
					className='input_helloy'
					style={{ display: 'block', width: '100%', marginTop: '15px' }}
				/>
				<input
					required
					type='password'
					placeholder='Password'
					onChange={this.onchange}
					name='password'
					className='input_helloy'
					style={{ display: 'block', width: '100%', marginTop: '15px' }}
				/>
				<div style={{ textAlign: 'center', marginTop: '20px' }}>
					<Button onClick={this.onSubmit_doc} variant='light'>
						Register
					</Button>
				</div>
				<div
					id='error_signup'
					style={{
						textAlign: 'center',
						fontSize: '16px',
						padding: '5px 0 0 0',
						fontWeight: 'bold',
						color: 'red',
					}}
				></div>
				<div className='usage' style={{ marginTop: '12px' }}>
					<h5
						style={{
							textAlign: 'center',
							fontSize: '16px',
							color: 'white',
							marginBottom: '0px',
							fontWeight: 'bold',
						}}
					>
						Steps To Follow
					</h5>
					<p>1. Upload The Image</p>
					<p>2. Choose The Model On Sidebar </p>

					<p>3. Click The Prediction Button </p>

					<p>Enjoy</p>
				</div>
			</div>
		);
	}
}

export default Signup;
