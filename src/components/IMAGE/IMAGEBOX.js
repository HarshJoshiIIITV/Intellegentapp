import React, { Component } from 'react';
import './IMAGEBOX.css';
class IMAGEBOX extends Component {
	calculateFaceLocation = (data) => {
		const image = document.getElementById('input_image');
		const width = Number(image.width);
		const height = Number(image.height);

		return {
			leftCol: data.left_col * width,
			topRow: data.top_row * height,
			rightCol: width - data.right_col * width,
			bottomRow: height - data.bottom_row * height,
		};
	};
	render() {
		const { single_resp } = this.props;
		var box = null;
		if (single_resp) {
			box = this.calculateFaceLocation(single_resp.region_info.bounding_box);
		}
		const name = single_resp.data.concepts[0].name;
		const value = (single_resp.data.concepts[0].value * 100)
			.toString()
			.substring(0, 5);
		return box != null ? (
			<div
				className='bounding-box'
				style={{
					top: box.topRow,
					right: box.rightCol,
					bottom: box.bottomRow,
					left: box.leftCol,
				}}
			>
				<div className='bounding-box-concepts'>
					<div className='concept bounding-box__concept'>
						<span className='concept__name'>{name}</span>
						<span className='concept__prediction-val'>{value}</span>
					</div>
				</div>
			</div>
		) : null;
	}
}

export default IMAGEBOX;
