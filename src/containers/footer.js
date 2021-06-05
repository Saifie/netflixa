import React from 'react'
import {Footer} from "../components"

export  function FooterContainer() {
	return (
		<Footer>
			<Footer.Title>Questions? Contact us</Footer.Title>
			<Footer.Break/>
			<Footer.Row>
				<Footer.Column>
					<Footer.Link>FAQ</Footer.Link>
					<Footer.Link>Invertor Relation</Footer.Link>
					<Footer.Link>Way To Watch</Footer.Link>
					<Footer.Link>Corporate Information</Footer.Link>
					<Footer.Link>Netflix Originals</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.Link>Help Center</Footer.Link>
					<Footer.Link>Jobs</Footer.Link>
					<Footer.Link>Term of Use</Footer.Link>
					<Footer.Link> Contact Us</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.Link>Account</Footer.Link>
					<Footer.Link>Radeep Gift Cards</Footer.Link>
					<Footer.Link>Privacy</Footer.Link>
					<Footer.Link>Speed test</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.Link>Media Center</Footer.Link>
					<Footer.Link>Buy Gift Card</Footer.Link>
					<Footer.Link>Cookie Preference</Footer.Link>
					<Footer.Link>Legal </Footer.Link>
				</Footer.Column>
			</Footer.Row>
			<Footer.Break/>
			<Footer.Text>Netflix Pakistan</Footer.Text>
		</Footer>
	)
}