import React,{useState} from 'react'
import {Link as ReactRouterLink} from "react-router-dom"
import {
	Background,
	Container,
	Logo,
	ButtonLink,
	Feature,
	Text,
	Link,
	Picture,
	Profile,
	Dropdown,
	Group,
	Search,
	SearchIcon,
	SearchInput,
	PlayButton,

FeatureCallOut} from "./stlyes/header"


export default function Header({bg=true,children,...restProps}) {
	return bg ? <Background {...restProps}>{children}</Background> :children;
}

Header.Frame=function HeaderFrame({children,...restProps}){
	return <Container{...restProps}>{children}</Container>

}

Header.Search=function HeaderSearch({searchTerm,setSearchTerm,...restProps}){

const [searchActive,setSearchActive]=useState(false)
	return( <Search{...restProps} >
		<SearchIcon onClick={()=>setSearchActive(searchActive => !searchActive)}>
	<img src="/images/icons/search.png" alt="search"/>

	</SearchIcon>

	<SearchInput value={searchTerm}
	 onChange={({target})=>setSearchTerm(target.value)}
	 placeholder="search for films and series"
	 active={searchActive}
	 />
	</Search>
	)

}



Header.Picture=function HeaderPicture({src,...restProps}){
	return <Picture {...restProps} src={`/images/users/${src}.png`}/>

}

Header.Profile=function HeaderProfile({children,...restProps}){
	return <Profile {...restProps}>{children}</Profile>

}


Header.PlayButton=function HeaderPlayButton({children,...restProps}){
	return <PlayButton {...restProps}>{children}</PlayButton>

}

Header.Dropdown=function HeaderDropdown({children,...restProps}){
	return <Dropdown {...restProps}>{children}</Dropdown>

}


Header.ButtonLink=function HeaderButtonLink({children,...restProps}){
	return <ButtonLink{...restProps}>{children}</ButtonLink>

}

Header.Feature=function HeaderFeature({children,...restProps}){
	return <Feature{...restProps}>{children}</Feature>

}

Header.FeatureCallOut=function HeaderFeatureCallOut({children,...restProps}){
	return <FeatureCallOut{...restProps}>{children}</FeatureCallOut>

}
Header.Group=function HeaderGroup({children,...restProps}){
	return <Group{...restProps}>{children}</Group>

}

Header.Text=function HeaderText({children,...restProps}){
	return <Text{...restProps}>{children}</Text>

}

Header.TextLink=function HeaderTextLink({children,...restProps}){
	return <Link{...restProps}>{children}</Link>

}


Header.Logo=function HeaderLogo({to,...restProps}){
	return <ReactRouterLink to={to}>
	<Logo {...restProps}/>

	</ReactRouterLink>

}