import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './Sidebar.css';
class Sidebar extends Component {
	constructor() {
		super();
	}

	render() {
		var { setButton, changeRoute } = this.props;
		return (
			<Row
				className='sidebar'
				style={{
					padding: '0',
					margin: '0',
					minHeight: '100vh',
					background: 'rgba(52, 58, 64,0.5)',
				}}
			>
				<Col md={12} style={{ padding: '0px' }}>
					<p
						className='color_grad'
						style={{
							fontSize: '28px',
							textAlign: 'center',
							padding: '10px',
							background: '',
							marginBottom: '0px',
						}}
					>
						Intelligent IQ
					</p>
					<Button
						style={{ paddingTop: '20px' }}
						name='Predict Color'
						onClick={setButton}
					>
						Predict Color
					</Button>{' '}
					<Button name='Predict Apparel Detection' onClick={setButton}>
						Predict Apparel Detection
					</Button>{' '}
					<Button name='Predict Face Detection' onClick={setButton}>
						Predict Face Detection
					</Button>{' '}
					<Button name='Predict Demographics' onClick={setButton}>
						Predict Demographics
					</Button>{' '}
					<Button name='Predict NSFW' onClick={setButton}>
						Predict NSFW
					</Button>{' '}
					<Button name='Predict Celebrity' onClick={setButton}>
						Predict Celebrity
					</Button>{' '}
					<Button name='Predict NSFW' onClick={() => changeRoute(null, null)}>
						Log Out
					</Button>{' '}
				</Col>
			</Row>
		);
	}
}

export default Sidebar;
