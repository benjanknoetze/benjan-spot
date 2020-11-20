//Home page body

import { Row, Col, Card, Button } from 'react-bootstrap'

const HomeBody = () => (
	<div className="homeBody pl-2 pr-2">
		<Row className="mb-5 mt-3 pl-2 pr-2">
			<Col md={4} className="mt-5 mb-5">
				<Card className="card p-4">
					<h5 className="cardHeading">People</h5>
					<p className="cardText mt-1 mb-2">
						Give your team a boost with someone who enthusiastically
						supports and motivates, and effortlessly adapts to daily
						challenges
                	</p>
					<Button href="/people" className="cardButton">
					<a className="people">More</a>
					</Button>
				</Card>
			</Col>
			<Col md={4} className="mt-5 mb-5">
				<Card className="card p-4">
					<h5 className="cardHeading">Design</h5>
					<p className="cardText mt-1 mb-2">
						Need a new perspective? Get someone with a natural inclination
						to problem-solve and suggests a wow moment for each project
               		</p>
					<Button href="/design"className="cardButton"> 
					<a>More</a>
					</Button>
				</Card>
			</Col>
			<Col md={4} className="mt-5 mb-5">
				<Card className="card p-4">
					<h5 className="cardHeading">Development</h5>
					<p className="cardText mt-1 mb-2">
						Your projects demand more than just ordinary tech abilities.
						Creative input and a personal touch are a necessity to set it
						apart
                	</p>
					<Button href="development" className="cardButton">
					<a>More</a>
					</Button>
				</Card>
			</Col>
		</Row>
		<style global jsx>{`
		    .card {
				border: none;
				height: 125%;
				background-color: #f8f4ffa6;
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
			.cardButton {
				position: absolute;
				bottom: 5%;
			}
			`}</style>
	</div>
)

export default HomeBody
