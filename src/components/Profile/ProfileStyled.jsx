import styled from "@emotion/styled";

export const Container = styled.div`
  display: block;
  margin: 0 auto;
  width:50%;
  height:auto;
  border-radius:8px;
  margin-bottom:30px;
`

export const ProfileCard = styled.div`
   text-align: center;
	padding: 30px 0;
   background-color: white;


`

export const Avatar = styled.img`
   height: 150px;
  width: 150px;
  border-radius: 50%;
	overflow: hidden;
display: block;
  margin: 0 auto;
  background-color: grey;
  margin-bottom:20px;
`

export const UserName = styled.p`
font-size: 24px;
font-weight:600;
line-height:1.5;
margin-bottom:15px;

`
export const TagText = styled.p`
font-size: 16px;
font-weight:500;
line-height:1.5;
margin-bottom:15px;
`

export const LocationText = styled.p`
font-size: 16px;
font-weight:500;
line-height:1.5;
`

export const StatisticList = styled.ul`
display: flex;
justify-content:space-between;
align-items:center;
text-align: center;
background-color:#e4e2d9 ;
border-top: 1px solid  rgba(47, 48, 58, 0.1);
border-end-start-radius: 8px;
	border-end-end-radius: 8px;


`

export const StatisticItems = styled.li`
display: flex;
flex-wrap: nowrap;
align-items:center;
flex-direction: column;
 width: calc(100% / 3);
justify-content: center;


&:not(:last-child) {
   border-right: 1px solid rgba(47, 48, 58, 0.1);
}
`


export const Label = styled.p`
font-size: 16px;
font-weight:400;
line-height:1.8;
color:#4d5d53;

`

export const Quantity = styled.p`
font-size: 18px;
font-weight:500;
line-height:2;

`