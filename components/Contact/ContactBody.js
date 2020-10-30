//Contact page body

import { Row, Col, Card, Button } from 'react-bootstrap'
import MyForm from './ContactForm' //Contact form component

const ContactBody = () => (
	<div className="bodyContainer pl-2 pr-2">
		<Row className="pt-5 pl-2 pr-2">
			<Col xs={12} md={8} lg={12}>
				<Card className="card p-2 mb-5">
					<MyForm />
				</Card>
			</Col>
		</Row>
		<style global jsx>{`
		    .card {
				border: none;
				background: #f8f4ffa6;
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
			.blogButton {
				width: 110px;
			}
			`}</style>
	</div>
)

export default ContactBody
