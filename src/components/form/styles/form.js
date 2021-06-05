import styled from "styled-components/macro"
import {Link as ReactRouterLink} from "react-router-dom"

export const Container=styled.div`
display:flex;
flex-direction:column;
min-height:660px;
background:rgba(0,0,0,0.75);
border-radius:5px;
box-sizing:border-box;
width:100%;
margin:auto;
max-width:450px;
padding:60px 68px 40px;
margin-bottom:100px;
`

export const Base=styled.form`
display:flex;
flex-direction:column;
max-width:450px;
width:100%;

`

export const Title=styled.h1`
color:#fff;
font-size:32px;
font-weight:bold;
margin-bottom:28px;

`
export const SmallText=styled.p`
color:#8c8c8c;
font-size:13px;
line-height:normal;
margin-top:10px;
`
export const Text=styled.p`
color:#737373;
font-size:16px;
font-weight:500;
`
export const Link=styled(ReactRouterLink)`
color:white;
text-decoration:none;
&:hover{
	text-decoration:underline;
}
`
export const Input=styled.input`
background:#333;
color:white;
border-radius:4px;
border:0;
height:50px;
line-height:50px;
padding:5px 20px;
margin-bottom:20px;
&:last-of-type{
	margin-bottom:28px;
}
`
export const Submit=styled.button`
background:#e50914;
border-radius:4px;
font-weight:bold;
font-size:16px;
margin:24px 0 12px;
padding:16px;
cursor:pointer;
border:0;
color:white;
&:disabled{
	opacity:0.5;
}

`

export const Error=styled.div`
background:#e87c03;
font-size:10px;
border-radius:4px;
margin: 0 0 16px;
color:white;
padding:15px 20px;
overflow:hidden;
`