//Home page body

import Link from 'next/link'
import { Row } from 'react-bootstrap'

const HomeHero = () => (
	<div className="container pl-2 pr-2">
		<Row className="mb-5 mt-5">
			<h2 className="heading mb-0 mt-5 pl-3">Need a wizard?</h2>
		</Row>
		<Row>
			<p className="intro lead pl-3">Talk to someone with a hybrid toolset;
			who combines technical and creative skills with
			a genuine interest in people</p>
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
				width: 55vw;
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

export default HomeHero
