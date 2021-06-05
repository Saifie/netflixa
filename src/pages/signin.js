import React,{useState,useContext} from 'react'
import {FooterContainer} from "../containers/footer.js"

import {HeaderContainer} from "../containers/header.js"
import {Form} from "../components"
import { FirebaseContext } from '../context/firebase';
import {useHistory} from "react-router-dom"


export default function Signin() {
	const history =useHistory()
	const {firebase} =useContext(FirebaseContext)
	const [email,setEmail]=useState("")
	const [password,setPassword]=useState("")
	const [error,setError]=useState("")

	const isInvalid=password===""||email===""
	const submitHandler=(e)=>{
		e.preventDefault()
		firebase.auth()
		.signInWithEmailAndPassword(email,password)
		.then(()=>{
			history.push("/")

		}).catch(error=>{
			setEmail("")
			setPassword("")
			setError(error.message)
		})
	}
	return (
		<>
		<HeaderContainer>
		<Form onSubmit={submitHandler}>
			<Form.Title>Sign in</Form.Title>
			{error ?<Form.Error>{error}</Form.Error>:null}
			<Form.Base>
			<Form.Input type="email" placeholder="Email Address" value={email} onChange={({target})=>setEmail(target.value)}/>
			<Form.Input  type="password" autoComplete="off" placeholder="Enter password"  value={password} onChange={({target})=>setPassword(target.value)}/>
			<Form.Submit disabled={isInvalid} type="submit">Sign in</Form.Submit>	
			</Form.Base>
			<Form.Text>
				New To Netllix ? <Form.Link to="/signup">Sign up Now!</Form.Link>
			</Form.Text>
			<Form.SmallText>
				This Page is protect by Google reCAPTCHA to ensure you are not a bot Learn More....
			</Form.SmallText>
		</Form>
			
		</HeaderContainer>
		<FooterContainer/>
		</>
	)
}