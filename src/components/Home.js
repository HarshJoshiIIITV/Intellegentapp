import React, { Component } from 'react';
import './Home.css';
import { Row, Col, Button } from 'react-bootstrap';
import Sidebar from './Sidebar/Sidebar';
import Clarifai from 'clarifai';
import NSFW from './NSFW/NSFW';
import DEMOG from './DEMOG/DEMOG';
import FACE from './FACE/FACE';
import APPAREL from './APPAREL/APPAREL';
import COLOR from './COLOR/COLOR';
import IMAGE from './IMAGE/IMAGE';
import CELEB from './CELEB/CELEB';
import axios from 'axios';

const app = new Clarifai.App({
	apiKey: 'c19d61f4dec64d6182c853edea4bff57',
});

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image_url:
				'https://cdn.vox-cdn.com/thumbor/fP-zKVpn-lZUh8iWeQAi9xFsN5Q=/0x0:640x427/920x613/filters:focal(0x0:640x427):format(webp)/cdn.vox-cdn.com/assets/1496753/stevejobs.jpg',
			target: 'Predict Color',
			resp: 'no',
			flag: 'no',
			entry: props.entries,
		};
		// console.log(this.state.image_url);
	}
	setButton = (e) => {
		this.setState({
			target: e.target.name,
			resp: 'no',
			flag: 'no',
		});
	};
	onchange = (e) => {
		this.setState({
			resp: 'no',
			flag: 'no',
			image_url: e.target.value,
		});
	};

	predict_color = (model) => {
		if (model != null) {
			app.models.predict(model, this.state.image_url).then(
				(response) => {
					const resp = response.outputs[0].data.colors;
					this.setState({
						resp,
						flag: 'color',
					});
				},
				(err) => {
					// there was an error
				}
			);
		}
	};
	predict_apparel = (model) => {
		if (model != null) {
			app.models.predict(model, this.state.image_url).then(
				(response) => {
					const resp = response.outputs[0].data.regions;
					this.setState({
						resp,
						flag: 'apparel',
					});
				},
				(err) => {
					// there was an error
				}
			);
		}
	};
	predict_face = (model) => {
		if (model != null) {
			app.models.predict(model, this.state.image_url).then(
				(response) => {
					const resp = response.outputs[0].data.regions;
					this.setState({
						resp: resp,
						flag: 'face',
					});
				},
				(err) => {
					// there was an error
				}
			);
		}
	};

	predict_celebrity = (model) => {
		if (model != null) {
			app.models.predict(model, this.state.image_url).then(
				(response) => {
					const resp = response.outputs[0].data.regions;
					this.setState({
						resp,
						flag: 'celeb',
					});
				},
				(err) => {
					// there was an error
				}
			);
		}
	};

	predict_demographics = (model) => {
		if (model != null) {
			app.models.predict(model, this.state.image_url).then(
				(response) => {
					const resp = response.outputs[0].data.regions;
					this.setState({
						resp,
						flag: 'demo',
					});
				},
				(err) => {
					// there was an error
				}
			);
		}
	};

	predict_nsfw = (model) => {
		if (model != null) {
			var resp = null;
			app.models.predict(model, this.state.image_url).then(
				(response) => {
					resp = response.outputs[0].data.concepts;
					if (resp != null) {
						this.setState({
							resp: resp,
							flag: 'nsfw',
						});
						// this.change_state(resp, 'nsfw');
					}
				},
				(err) => {
					// there was an error
				}
			);
		}
	};

	selection = () => {
		let model = null;

		if (this.state.target == 'Predict Color')
			this.predict_color('eeed0b6733a644cea07cf4c60f87ebb7');
		if (this.state.target == 'Predict Apparel Detection')
			this.predict_apparel('72c523807f93e18b431676fb9a58e6ad');
		if (this.state.target == 'Predict Face Detection')
			this.predict_face('a403429f2ddf4b49b307e318f00e528b');
		if (this.state.target == 'Predict Demographics')
			this.predict_demographics('c0c0ac362b03416da06ab3fa36fb58e3');
		if (this.state.target == 'Predict NSFW')
			this.predict_nsfw('e9576d86d2004ed1a38ba0cf39ecb4b1');
		if (this.state.target == 'Predict Celebrity')
			this.predict_celebrity('e466caa0619f444ab97497640cefc4dc');
	};
	onsubmit = (id) => {
		this.setState({
			resp: 'no',
			flag: 'no',
		});
		const model = this.selection();
		setTimeout(() => {
			axios
				.put('https://marvelous-virgin-islands-69275.herokuapp.com/image', {
					id: id,
				})
				.then((resp) => {
					this.setState({
						entry: resp.data,
					});
				});
		}, 1000);
	};

	plus_entry = (id) => {};

	render() {
		const flag2 = this.state.flag;
		const resp2 = this.state.resp;
		const id = this.props.id;
		var x = null;
		if (resp2 != null && flag2 != null && id != null) {
			if (flag2 == 'nsfw') {
				x = <NSFW resp={resp2} />;
			}
			if (flag2 == 'demo') x = <DEMOG resp={resp2} />;
			if (flag2 == 'face') x = <FACE resp={resp2} />;
			if (flag2 == 'apparel') x = <APPAREL resp={resp2} />;
			if (flag2 == 'color') x = <COLOR resp={resp2} />;
			if (flag2 == 'celeb') x = <CELEB resp={resp2} />;
		}
		return (
			<div className='home'>
				<Row style={{ margin: '0', padding: '0' }}>
					<Col md={2} style={{ margin: '0', padding: '0' }}>
						<Sidebar
							setButton={this.setButton}
							changeRoute={this.props.changeRoute}
						/>
					</Col>
					<Col md={5} style={{ padding: '20px' }}>
						<div style={{ margin: '10px' }}>
							<p>You predicted {this.state.entry} times</p>
							<input
								placeholder='Enter image URL'
								style={{
									border: 'none',
									outline: 'none',
									color: 'white',
									fontWeight: '400',

									width: '100%',
									borderBottom: '1.8px solid #343a40',
									background: 'none',
								}}
								onChange={this.onchange}
								type='text'
								required
							/>
						</div>
						<Button
							style={{ margin: '10px', width: '250px' }}
							variant='dark'
							onClick={() => this.onsubmit(id)}
						>
							{this.state.target}
						</Button>{' '}
						{x}
					</Col>
					<Col md={1} />
					<Col md={3} style={{ padding: '20px' }}>
						<IMAGE
							source={this.state.image_url}
							resp={this.state.resp}
							target={this.state.target}
						/>
					</Col>

					<Col md={1} />
				</Row>
			</div>
		);
	}
}

export default Home;
