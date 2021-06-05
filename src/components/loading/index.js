import React from 'react'
import {Picture,Spinner,LockBody,ReleaseBody} from "./styles/loading.js"

export default function Loading({src,...resProps}) {
	return (
		<Spinner {...resProps}>
		<LockBody/>

		<Picture  src={`/images/users/${src}.png`}/>
			
		</Spinner>
	)
}

Loading.ReleaseBody=function LoadingReleaseBody(){
	return <ReleaseBody/>
}