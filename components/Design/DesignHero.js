//Design page Hero

/*Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/
import Link from 'next/link'
import { Row } from 'react-bootstrap'

const DesignHero = () => (
	<div className="pl-3 pr-3">
		<Row className="mb-5 mt-5">
			<h2 className="heading mb-0 mt-5 pl-3">Design</h2>
		</Row>
		<Row>
			<p className="intro lead pl-3">Need a new perspective? <br></br>
			Talk to someone who will help you breathe life into 
			old projects and set new ones apart. </p>
		</Row>
		<Row className="mb-5 justify-content-end">
			<Link href="/contact">
				<a className="contact mt-3 mr-3">Get in touch</a>
			</Link>
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
			.contact {
			font-family: Allerta, sans-serif;
	        font-weight: 800;
			text-decoration: none;
			padding: 0.7rem 1rem;
			color: #dddbe6;
			background-color: #635598;
			border-radius: 20px;
			transition: 0.1s;
			}
			.contact:hover {
			color: white;
			transform: scale(1.03);
			}
			`}</style>
		
	</div>
)

export default DesignHero
