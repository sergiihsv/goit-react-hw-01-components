import styled from "@emotion/styled";

export const Container = styled.div`
  display: block;
  margin: 0 auto;
  width:50%;
  height:auto;
  border-radius:10%;
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

`


export const StatisticItems = styled.li`
 font-size: 14px;
`
export const Label = styled.p`
font-size: 12px;
`

export const Quantity = styled.p`
font-size: 12px;
`