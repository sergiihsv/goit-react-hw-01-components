import styled from "@emotion/styled";

export const  FriendsList = styled.ul`
display:block;
margin:0 auto;
   width: calc(100% / 3);
   margin-bottom: ${(props) => props.theme.spacing(10)};
`

export const Item = styled.li`
background-color: ${(props) => props.theme.colors.white};
	padding: ${(props) => props.theme.spacing(3)};
	border-radius: ${(props) => props.theme.spacing(1)};
	box-shadow: ${(props) => props.theme.colors.boxShadow};
	overflow: hidden;
	&:not(:last-child) {
		margin-bottom: ${(props) => props.theme.spacing(5)};
	}

`

const Status = styled.span`
display: inherit;
width:15px;
height:15px;
border-radius: 50%;
margin-right: ${(props) => props.theme.spacing(6)};
`

export const OnLine = styled(Status)`
background-color: ${(props) => props.theme.colors.green};   
`

export const OffLine = styled(Status)`
background-color: ${(props)=> props.theme.colors.red};
`

export const Avatar = styled.img`
    border-radius: 10%;
	overflow: hidden;
`

export const Name = styled.p`
    font-size:16px;

`