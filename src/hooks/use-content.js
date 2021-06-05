import React,{useState,useEffect,useContext} from 'react'
import { FirebaseContext } from '../context/firebase';

export default function UseContent(target) {
	const [content,setContent]=useState([])
	const {firebase}=useContext(FirebaseContext)

	
	useEffect(() => {
		firebase.firestore().collection(target)
		.get()
		.then(snapshot=>{
			const allContent=snapshot.docs.map((contentObj)=>(
				{...contentObj.data(),docId:contentObj.id}
				))
			setContent(allContent)
		}).catch(e=>{
			console.log(e.message)
		})
	}, [])



	return {[target]:content}
}