//Development page masonry image grid

import { Row, Col, Image, Button } from 'react-bootstrap'

const DevelopmentMasonry = () => (
	<div className="pl-5 pr-5">
		<Row>
			<Col lg={12} className="p-0 m-0">
			<h7 className="subHeading">React Minesweeper</h7>
			<p className="masonryText mt-4 mb-1 pl-1">
						This is Minesweeper game built with Create-React-App
						 </p>
			<Image fluid src="minesweeper.png" className="mineweeperImg p-0 mt-4" alt="minesweeper"></Image>
			<p className="masonryText mt-4 mb-3 pl-1">
						A live version of this Minesweeper game can be seen on Heroku:
						 </p>
						 <Button href="https://boiling-wave-74790.herokuapp.com/" className="herokuButton">
						Heroku
					</Button>
			</Col>
			<Col lg={12} className="p-0 mt-4">
			<h7 className="subHeading mt-3">Other projects</h7>
			<p className="cardText mt-4 mb-3">
						More of his projects can be seen on his GitHub page:
						 </p>
					<Button href="https://github.com/benjanknoetze" className="githubButton mb-4">
						GitHub
					</Button>
			</Col>
		</Row>
		<style global jsx>{`
			.subHeading {
				color: #0d0411;
				font-family: Allerta, sans-serif;
				font-weight: 800;
			}
			.mineweeperImg {
				object-fit: cover;
				object-position: top;
				width: 100%;
				height: 40vw;
			}
			.showcaseImg {
				object-fit: cover;
				width: 100%;
				height: 25vw;
			}
			.masonryText {
				color: #0d0411;
				font-family: Bitter, serif;
			}
			.herokuButton, .githubButton {
				width: 110px;
			}
			`}</style>
	</div>
)

export default DevelopmentMasonry
