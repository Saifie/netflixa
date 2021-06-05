import React,{useState,useContext} from 'react'
import {FooterContainer} from "../containers/footer.js"

import {HeaderContainer} from "../containers/header.js"
import {Form} from "../components"
import { FirebaseContext } from '../context/firebase';
import {useHistory} from "react-router-dom"

export default function Signup() {
		const history =useHistory()
	const {firebase} =useContext(FirebaseContext)
	const [firstname,setFirstname]=useState("")
	const [email,setEmail]=useState("")
	const [password,setPassword]=useState("")
	const [error,setError]=useState("")
	const isInvalid=firstname==="" ||password===""||email===""


		const submitHandler=(e)=>{
		e.preventDefault()
		firebase.auth()
	.createUserWithEmailAndPassword(email, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstname,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push("/");
          })
      )
      .catch((error) => {
        setFirstname('');
        setEmail('');
        setPassword('');
        setError(error.message);
      });
  };
	return (
		<>
		<HeaderContainer>
		<Form onSubmit={submitHandler}>

			<Form.Title>Sign up</Form.Title>
			{error ?<Form.Error>{error}</Form.Error>:null}
			<Form.Base>
			<Form.Input type="text" placeholder="First Name" 
			value={firstname} 
			onChange={({target})=>setFirstname(target.value)}/>



			<Form.Input type="email" placeholder="Email Address" 
			value={email} 
			onChange={({target})=>setEmail(target.value)}/>

			<Form.Input
			  type="password" 
			  autoComplete="off" placeholder="Enter password" 
			   value={password}
			    onChange={({target})=>setPassword(target.value)}/>

			<Form.Submit disabled={isInvalid} type="submit">Sign up</Form.Submit>	
			</Form.Base>
			<Form.Text>
				Already  Netllix  Account ? <Form.Link to="/signin">Sign in Now!</Form.Link>
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