//Contact page Hero

/*Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/
import Link from 'next/link'
import { Row } from 'react-bootstrap'

const ContactHero = () => (
	<div className="container pl-4 pr-4">
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
			color: #cdc9de;
			font-family: Bitter, serif;
			}
			.intro {
			color: #cdc9de;
			font-family: Bitter, serif;
			width: 35vw;
			}
			`}</style>
		
	</div>
)

export default ContactHero
