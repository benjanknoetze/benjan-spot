//Development page Hero

import Link from 'next/link'
import { Row } from 'react-bootstrap'

const DevelopmentHero = () => (
	<div className="pl-3 pr-3">
		<Row className="mb-5 mt-5">
			<h2 className="heading mb-0 mt-5 pl-3">Development</h2>
		</Row>
		<Row>
			<p className="intro lead pl-3">Developers should understand complicated code.
				But do they understand your team and company culture?
				Also, do your projects look a little dry? Talk to someone who has 
				technical skills and brings a personal touch 
				and creative input to the table.
			</p>
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
			width: 75vw;
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

export default DevelopmentHero
