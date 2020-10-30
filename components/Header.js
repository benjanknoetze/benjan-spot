//Navigation

import Link from 'next/link'
import { Navbar, Dropdown } from 'react-bootstrap'

const navStyle = {
	fontFamily: "Bitter, serif",
	fontWeight: 800,
}

const linkStyle = {
	color: "#cdc9de",
	textDecoration: "none",
	fontSize: 19,
	padding: 10,
}

const Header = () => (
	<Navbar style={navStyle}>
			<Link href="/">
				<a style={linkStyle}>Benjan's Spot</a>
			</Link>
			<Navbar.Collapse className="ml-4">
				<Dropdown style={navStyle}>
					<Dropdown.Toggle>
						Skills
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item href="/people"><a>People</a></Dropdown.Item>
						<Dropdown.Item href="/design"><a>Design</a></Dropdown.Item>
						<Dropdown.Item href="/development"><a>Development</a></Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Navbar.Collapse>
			<Link href="/contact">
				<a style={linkStyle}>Contact</a>
			</Link>
			<Link href="/BenjanKnoetze_CV.pdf">
				<a className="download">Download CV</a>
			</Link>
			<style global jsx>{`
			.download {
				float: right;
				text-decoration: none !important;
				padding: 0.7rem 1rem;
				color: #cdc9de;
				background-color: #635598;
				border-radius: 20px;
				transition: 0.1s;
			}
			.download:hover {
				color: white;
				transform: scale(1.03);
			}
			/* Nav dropdown menu */
			.dropdown-menu {
				background-color: #f8f4ffa6;
			}
			.dropdown-item:hover {
				background-color: #635598;
				color: white;
			}
			`}</style>
	</Navbar>
)

export default Header