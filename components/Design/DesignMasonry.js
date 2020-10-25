//Design page masonry image grid

import { Row, Col, Image } from 'react-bootstrap'

const DesignMasonry = () => (
	<div className="bodyContainer pl-5 pr-5">
		<Row>
			<Col lg={4} className="p-0 m-0">
			<Image fluid src="bulb.jpg" className="showcaseImg p-0 m-0" alt="bulb image"></Image>
			</Col>
			<Col lg={4} className="p-0 m-0">
			<Image fluid src="logo.png" className="showcaseImg p-0 m-0" alt="Zingara logo"></Image>
			</Col>
			<Col lg={4} className="p-0 m-0">
			<Image fluid src="alien.png" className="showcaseImg p-0 m-0" alt="Alien image"></Image>
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
