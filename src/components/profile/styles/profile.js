import styled from 'styled-components/macro';

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:auto;
max-width:80%;
`

export const Title = styled.h1`
width:100%;
color:#fff;
font-size:48px;
text-align:center;
font-weight:500;
`
export const List = styled.ul`
display:flex;
flex-direction:row;
`
export const Name = styled.p`
color:#808080;
text-overflow:ellipsis;
font-size:16px;
&:hover{
	font-weight:bold;
	color:#e5e5e5;
}
`


export const Picture = styled.img`
width:100%;
max-width:150px;
height:auto;
border:3px solid black;
cursor:pointer;
`

export const Item = styled.li`
max-width:200px;
max-height:200px;
list-style-type:none;
text-align:center;
margin-rght:30px;
&:hover>${Picture}{
	border :3px solid #fff;
}

&:hover>${Name}{
	font-weight:bold;
	color :#fff;
}
&:last-of-type{
	margin-rght:0;
}
`