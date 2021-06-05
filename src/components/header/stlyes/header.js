import styled from "styled-components/macro"
import {Link as ReactRouterLink} from "react-router-dom"

export const Container=styled.div`
display:flex;
margin:0 56px;
height:64px;
padding:18px 0;
justify-content:space-between;
align-items:center;
a{
	display:flex;

}

@media(max-width:1000px){
	margin:0 30px;
}
`
export const Background=styled.div`
display:flex;
flex-direction:column;
background:url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;
    clip-path:polygon(0 0, 0 100%,100% 90%,100% 0);

    @media (max-width: 1100px){
    	${({dontShowOnSmall})=>dontShowOnSmall && `background: none;`}
    }
`;

export const Logo=styled.img`
height:32px;
width:108px;
margin-right:40px;

@media(min-width:1449px){
	height:45px;
	width:167px;

}
`
export const Frame=styled.div`
`
export const ButtonLink=styled(ReactRouterLink)`
background:#e50914;
display:block;
width:84px;
height:fit-content;
color:white;
border:0;
font-size:15px;
border-radius:3px;
padding:8px 17px;
cursor:pointer;
text-decoration:none;
box-sizing:border-box;
&:hover{
	background:#f40612;
}
`

export const Feature=styled(Container)`
padding:150px 0 500px 0;
flex-direction:column;
align-items:normal;
width :50%;
@media (max-width:1100px){
	display:none;
}
`
export const Text=styled.p`
color:#ddd;
font-size:22px;
line-height:normal;
text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
margin: 0;
`

export const FeatureCallOut=styled.h2`
color:white;
font-size:50px;
line-height:normal;
font-weight:bold;
text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
margin: 0;
margin-bottom: 20px;
`
export const Link=styled.p`
color: #eee;
margin-right: 30px;
text-decoration: none;
font-weight: ${({active})=>(active==="true" ? "700" : "normal")};
cursor: pointer;
&:hover{
	font-weight: bold;

}
&:last-of-type{
	margin-right: 0;
}
`

export const Group=styled.div`
display: flex;
align-items:center;
`
export const Dropdown=styled.div`
position: absolute;
padding:10px;
display: none;
background: black;
width: 100px;
top: 32px;
right: 10px;
$(Group):last-of-type $(Link){
	cursor: pointer;


}

$(Group){
	margin-bottom: 10px;
	&:last-of-type{
		margin-bottom: 0px;

	}
	$(Link),$(Picture){
		cursor: default;
	}
}
button{
	margin-right: 10px;
}

p{
	font-size: 12px;
	margin-top: 0;
	margin-bottom: 0;
}
`

export const Profile=styled.div`
display: flex;
align-items: center;
margin-left: 20px;
position: relative;
button{
	cursor: pointer;
}
&:hover > ${Dropdown}{
	display: flex;
	flex-direction: column;
}
`

export const Picture=styled.div`
background: url(${({src})=>src});
background-size: contain;
border: 0;
width: 32px;
height: 32px;
cursor: pointer;
`


export const Search=styled.div`
display: flex;
align-items: center;
svg{
	color:#fff;
	cursor: pointer;
}

@media(max-width: 700){
	display: none;
}

`

export const SearchIcon=styled.button`
cursor: pointer;
background-color: transparent;
border: 0;

img{
	filter: brightness(0) invert(1);
	width: 16px;
	

}
`

export const SearchInput=styled.input`
background: #44444459;
	color: white;
	border: 1px solid white;
	transition: width 0.5s;
	height: 30px;
	font-size: 14px;
	margin-left: ${({active})=>(active===true ? "10px": "0")};
	opacity: : ${({active})=>(active===true ? "1": "0")};
	padding: : ${({active})=>(active===true ? "0 10px": "0")};
	width: ${({active})=>(active===true ? "200px": "0")};
`


export const PlayButton=styled.button`
box-shadow: 0 0.6vw 1vw -0.4vh rgba(0,0,0,0.35);
background-color: #e6e6e6;
color:000;
border-width: 0;
padding: 10px 20px;
border-radius:5px;
max-width: 130px;
font-size: 20px;
font-weight: bold;
margin-top: 30px;
cursor: pointer;
transition: background-color 0.5s ease;

&:hover{
	background-color: #ff1e1e;
	color: #fff;

}
`