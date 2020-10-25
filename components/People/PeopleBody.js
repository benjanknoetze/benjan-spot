//People page body

import { Row, Col, Card, Button } from 'react-bootstrap'

const PeopleBody = () => (
	<div className="bodyContainer pl-5 pr-5">
		<Row className="pt-5 pl-5 pr-5">
			<Col xs={12} md={8} lg={12}>
				<Card className="card p-4 mb-5">
					<h5 className="cardHeading">Working with people</h5>
					<p className="cardText mt-1 mb-2">
						Benjan's first steps toward a career started at the University of
						Pretoria where he completed a Bachelor's and Master's degree in Theology
				and specialised in counselling. </p>
					<p className="cardText mt-1 mb-2">
						During his chapter in the church, he worked with various groups of people
						from all walks of life and different belief systems. One of the main challenges
						which he learnt here was how to get people who might be poles apart on the same
				page and enthusiastic towards a specific goal. </p>
					<p className="cardText mt-1 mb-2">
						However, due to the church's attitude toward gay clergy and marriage,
						Benjan decided that skills would better serve a different field.
                </p>
				</Card>
			</Col>
			<Col xs={12} md={4} lg={12}>
				<Card className="card p-4 mb-5">
					<h5 className="cardHeading">Blog</h5>
					<p className="cardText mt-1 mb-2">
						While he was a minister, Benjan sporadically blogged about
				theology and philosophy. <br></br>
				Some of his thoughts can be viewed here:
                </p>
					<Button href="https://rubiconrubric.wordpress.com" className="blogButton mt-2">
						Blog
					</Button>
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
				width: 80px;
			}
			`}</style>
	</div>
)

export default PeopleBody
