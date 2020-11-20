//Contact page Hero

import { Row } from 'react-bootstrap'

const ContactHero = () => (
	<div className="pl-3 pr-3">
		<Row className="mb-5 mt-5">
			<h2 className="heading mb-0 mt-5 pl-3">Contact</h2>
		</Row>
		<Row>
			<p className="intro lead pl-3">Thank you for getting in touch! <br></br>
			Please leave a message and I'll get back to you soon.
			 </p>
		</Row>
		<style jsx>{`
			.heading {
			color: #dddbe6;
			font-family: Bitter, serif;
			}
			.intro {
			color: #dddbe6;
			font-family: Bitter, serif;
			width: 75vw;
			}
			`}</style>
		
	</div>
)

export default ContactHero
