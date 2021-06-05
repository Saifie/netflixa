import React from 'react'
import {JumbotronContainer} from "../containers/jumbotron.js"
import {FooterContainer} from "../containers/footer.js"
import {FaqsContainer} from "../containers/faqs.js"
import {HeaderContainer} from "../containers/header.js"
import {OptForm,Feature} from "../components"


export default function Home() {
	return (
		<>
		<HeaderContainer>
		<Feature>
			<Feature.Title>
				Unlimited films,TV programs and more.
			</Feature.Title>
			<Feature.SubTitle>
				Watch anywhere Cancel any time.
			</Feature.SubTitle>
			<OptForm>
				<OptForm.Input placeholder="Email Address"/>
				<OptForm.Button>Try It Now!</OptForm.Button>
				<OptForm.Break/>
				<OptForm.Text>Ready To Watch Enter Your Email To Create Or Restart Your Membership</OptForm.Text>
			</OptForm>
		</Feature>

		
		</HeaderContainer>
	<JumbotronContainer/>
      <FaqsContainer/>
    <FooterContainer/>
			
		

		</>
	)
}