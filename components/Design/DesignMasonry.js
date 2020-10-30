//Design page masonry image grid

import { Row, Col, Image } from 'react-bootstrap'

const DesignMasonry = () => (
	<div className="bodyContainer pl-2 pr-2">
		<Row>
			<Col lg={4}>
			<Image fluid src="bulb.jpg" className="showcaseImg" alt="bulb image"></Image>
			</Col>
			<Col lg={4}>
			<Image fluid src="logo.png" className="showcaseImg" alt="Zingara logo"></Image>
			</Col>
			<Col lg={4}>
			<Image fluid src="alien.png" className="showcaseImg" alt="Alien image"></Image>
			</Col>
		</Row>
		<style global jsx>{`
			.showcaseImg {
				object-fit: cover;
				width: 100%;
				height: 25vw;
			}
		
			`}</style>
	</div>
)

export default DesignMasonry
