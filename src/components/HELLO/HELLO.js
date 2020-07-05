import React, { Component } from 'react';
import './Hello.css';
import { Row, Col, Button } from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import Signup from '../Signup/Signup';
import axios from 'axios';
class HELLO extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		};
	}
	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
		document.getElementById('error_login').innerHTML = '';
	};
	onSubmit_doc = () => {
		axios
			.post(
				'https://marvelous-virgin-islands-69275.herokuapp.com/signin',
				this.state
			)
			.then((resp) => {
				if (resp.data.id)
					this.props.changeRoute(resp.data.id, resp.data.entries);
			})
			.catch((err) => {
				document.getElementById('error_login').innerHTML =
					'<p style="margin:0px;color:red">Signin error</p>';
			});
	};
	render() {
		return (
			<div className='hello'>
				<div>
					<Row
						className='color_grad3'
						style={{ margin: '0', padding: '8px 0 8px 0' }}
					>
						<Col md={3}>
							<p
								style={{
									fontSize: '36px',
									margin: '0',
								}}
							>
								IntelligenceQ
							</p>
						</Col>
						<Col md={7} style={{ textAlign: 'right', paddingTop: '12px' }}>
							<input
								placeholder='Email ID'
								required
								type='text'
								name='email'
								onChange={this.onChange}
								className='input_hello'
								style={{ width: '50%' }}
							/>
							<input
								required
								type='password'
								name='password'
								placeholder='Password'
								onChange={this.onChange}
								className='input_hello'
								style={{ marginLeft: '20px' }}
							/>
						</Col>
						<Col md={2} style={{ paddingTop: '5px', display: 'flex' }}>
							<Button
								onClick={this.onSubmit_doc}
								variant='light'
								style={{ padding: '8px', height: '40px' }}
							>
								SignIn
							</Button>
							<div
								id='error_login'
								style={{
									fontSize: '12px',
									padding: '15px 0 0 10px',
									fontWeight: 'bold',
								}}
							></div>
						</Col>
						<p
							style={{
								margin: '8px 0 0 0',
								fontWeight: 'bold',
								textAlign: 'center',
								fontStyle: 'italic',
								width: '100%',
								fontSize: '16px',
							}}
						>
							“It's going to be interesting to see how society deals with
							artificial intelligence, but it will definitely be cool.” —Colin
							Angle
						</p>
					</Row>
					<Row style={{ margin: '0', padding: '0' }}>
						<Col md={1} />
						<Col md={4} style={{ padding: '15px' }}>
							<div style={{ marginTop: '30px' }}>
								<Collapsible
									className='collapsible'
									trigger={
										<p
											style={{
												margin: '0',
												padding: '4px',
												fontWeight: 'bold',
												fontSize: '18px',
												paddingLeft: '10px',
											}}
										>
											{' '}
											Demographics Detection{' '}
										</p>
									}
								>
									<p style={{ fontSize: '16px', fontStyle: 'italic' }}>
										Predict the age, gender, and cultural appearance of detected
										faces
									</p>
								</Collapsible>
								<br />
								<Collapsible
									className='collapsible'
									trigger={
										<p
											style={{
												margin: '0',
												padding: '4px',
												fontWeight: 'bold',
												fontSize: '18px',
												paddingLeft: '10px',
											}}
										>
											Apparel Detection
										</p>
									}
								>
									<p style={{ fontSize: '16px', fontStyle: 'italic' }}>
										Recognize clothing, accessories, and other fashion-related
										items
									</p>
								</Collapsible>
								<br />
								<Collapsible
									className='collapsible'
									trigger={
										<p
											style={{
												margin: '0',
												padding: '4px',
												fontWeight: 'bold',
												fontSize: '18px',
												paddingLeft: '10px',
											}}
										>
											Face Detection
										</p>
									}
								>
									<p style={{ fontSize: '16px', fontStyle: 'italic' }}>
										Detect the presence and location of human faces with a
										bounding box
									</p>
								</Collapsible>
								<br />
								<Collapsible
									className='collapsible'
									trigger={
										<p
											style={{
												margin: '0',
												padding: '4px',
												fontWeight: 'bold',
												fontSize: '18px',
												paddingLeft: '10px',
											}}
										>
											Color Detection
										</p>
									}
								>
									<p style={{ fontSize: '16px', fontStyle: 'italic' }}>
										Identify the dominant colors present in your media in hex or
										W3C form
									</p>
								</Collapsible>
								<br />
								<Collapsible
									className='collapsible'
									trigger={
										<p
											style={{
												margin: '0',
												padding: '4px',
												fontWeight: 'bold',
												fontSize: '18px',
												paddingLeft: '10px',
											}}
										>
											NSFW Detection
										</p>
									}
								>
									<p style={{ fontSize: '16px', fontStyle: 'italic' }}>
										Identify different levels of nudity in visual content
									</p>
								</Collapsible>
								<br />
								<Collapsible
									className='collapsible'
									trigger={
										<p
											style={{
												margin: '0',
												padding: '4px',
												fontWeight: 'bold',
												fontSize: '18px',
												paddingLeft: '10px',
											}}
										>
											Celebrity Detection
										</p>
									}
								>
									<p style={{ fontSize: '16px', fontStyle: 'italic' }}>
										Identify celebrities that closely resemble detected faces
									</p>
								</Collapsible>
							</div>
						</Col>
						<Col md={3} />

						<Col md={4} style={{ padding: '20px' }}>
							<Signup changeRoute={this.props.changeRoute} />
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default HELLO;
