//Design page Hero

/*Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/
import Link from 'next/link'
import { Row } from 'react-bootstrap'

const DesignHero = () => (
	<div className="container pl-2 pr-2">
		<Row className="mb-5 mt-5">
			<h2 className="heading mb-0 mt-5 pl-3">Design</h2>
		</Row>
		<Row>
			<p className="intro lead pl-3">Having a team member who can work with 
			intricate systems and frameworks is helpful. 
			But people are complicated too! Talk to someone who has 
			experience working with a diverse group of individuals and groups. </p>
		</Row>
		<Row className="mb-5 justify-content-end">
			<Link href="/contact">
				<a className="contact mt-3 mr-3">Get in touch</a>
			</Link>
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
			.contact {
			font-family: Allerta, sans-serif;
	        font-weight: 800;
			text-decoration: none;
			padding: 0.7rem 1rem;
			color: #cdc9de;
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
