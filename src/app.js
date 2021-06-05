import React from 'react'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import {Home,Signin,Signup,Browse} from "./pages"
import {IsUserRedirect,ProtectedRoute} from "./helpers/routes.js"
import {useAuthListener} from "./hooks"

export default function App() {
	 const { user } = useAuthListener();
  return (<>

  	<Router>
  	<IsUserRedirect
  	user={user}
  	loggedInPath="/browse"
  	path="/signin"
  	exact
  	>
  		<Signin/>
  	</IsUserRedirect>


  	<IsUserRedirect
  	user={user}
  	loggedInPath="/browse"
  	path="/signup"
  	exact
  	>
  		<Signup/>
  	</IsUserRedirect>

  	<ProtectedRoute user={user}
  	path="/browse" 
  	exact 
  	>
  		<Browse/>
  	</ProtectedRoute>

  	<IsUserRedirect
  	user={user}
  	loggedInPath="/browse"
  	path="/"
  	exact
  	>
  		<Home/>
  	</IsUserRedirect>
  	
  	</Router>
 

    </>
  )
}
