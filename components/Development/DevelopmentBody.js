//Development page body

import { Row, Col, Card, Button } from 'react-bootstrap'
import DesignMasonry from './DevelopmentMasonry' //Design masonry image component

const DevelopmentBody = () => (
	<div className="pl-5 pr-5">
		<Row className="pt-5 pl-5 pr-5">
			<Col lg={12}>
				<Card className="card p-4 mb-5">
					<h5 className="cardHeading">Working with development</h5>
					<p className="cardText mt-1 mb-2">
					While Benjan was working as a junior graphic (web) designer 
					for Chamberlain's in 2018, his main goal was to design the static 
					pages for their new e-commerce site.
				    </p>
					<p className="cardText mt-1 mb-2">
					He soon realised that Magento's Page Builder wasn't going to cut it 
					- he needed code (particularly CSS) to bring the static layout that 
					the team agreed upon to fruition. This project piqued his curiosity, 
					where he started to learn intermediate web code.
					</p>
					<p className="cardText mt-1 mb-2">
					Benjan enrolled for a Certificate in Full Stack Web Development at 
					HyperionDev nearing the end of that year, where he had an immersive
					learning experience with the MERN stack.
					</p>
				</Card>
			</Col>
			<Col lg={12}>
				<Card className="card p-0 mb-5">
					<h5 className="cardHeading pt-4 pl-4 pr-4 pb-2 ml-2">Projects</h5>
					<DesignMasonry/>
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
			`}</style>
	</div>
)

export default DevelopmentBody
