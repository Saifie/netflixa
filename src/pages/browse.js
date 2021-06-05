import React from 'react'
import {UseContent} from "../hooks"
import selectionMap from "../utils/selection-map.js"
import BrowseContainer from "../containers/browse"
export default function Browse() {
	
	const {series}=UseContent("series")
	const {films}=UseContent("films")
	const slides=selectionMap({series,films})
	console.log(slides)
	
	return <BrowseContainer slides={slides}  />
}