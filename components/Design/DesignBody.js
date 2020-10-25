//Design page body

import { Row, Col, Card, Button } from 'react-bootstrap'
import DesignMasonry from './DesignMasonry' //Design masonry image component

const DesignBody = () => (
	<div className="bodyContainer pl-5 pr-5">
		<Row className="pt-5 pl-5 pr-5">
			<Col lg={12}>
				<Card className="card p-4 mb-5">
					<h5 className="cardHeading">Working with design</h5>
					<p className="cardText mt-1 mb-2">
						At the beginning of 2016, Benjan enrolled for a 12-week GetSmarter course
						in graphic design (in partnership with the Univerity of Cape Town).
						This course affirmed that he was on the right track and led him to complete
						Level 1 and 2 Illustrator and Photoshop courses at CTU Potchefstroom.
				    </p>
					<p className="cardText mt-1 mb-2">
						Starting in 2017, he enrolled for a National Certificate in Design at CTU Potchefstroom
					    which he completed at the end of 2018. </p>
				</Card>
			</Col>
			<Col lg={12}>
				<Card className="card p-0 mb-5">
					<h5 className="cardHeading p-4 ml-2">Showcase</h5>
					<DesignMasonry/>
					<p className="cardText mt-4 mb-3 pl-4 ml-2">
						More of his work can be seen on his Behance profile:
						 </p>
					<Button href="https://behance.net/bisforben" className="behanceButton">
						Behance
					</Button>
				</Card>
			</Col>
		</Row>
		<style global jsx>{`
		    .card {
				border: none;
				background-color: #f8f4ffa6 !important;
			}
			.cardHeading {
				color: #0d0411;
				font-family: Allerta, sans-serif;
				font-weight: 800;
			}
			.cardText {
				color: #0d0411;
				font-family: Bitter, serif;
			}
			.behanceButton {
				width: 110px;
				margin: 0 0 16px 32px;
			}
			`}</style>
	</div>
)

export default DesignBody
