import styled from "@emotion/styled";

function generateDarkColorHex() {
    let color = "#";
    for (let i = 0; i < 3; i++)
      color += (
        "0" + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)
      ).slice(-2);
    return color;
  }


export const Section = styled.section`
padding: ${(props) => props.theme.spacing(10)} 0;

    
`
export const Card = styled.div`
text-align: center;
display: block;
margin: 0 auto;
width: 50%;
background-color: ${(props) => props.theme.colors.white};
	border-radius: ${(props) => props.theme.spacing(1)};
	box-shadow: ${(props) => props.theme.colors.boxShadow};
	
    
`

export const Title = styled.h2`
font-size:24px;
font-weight:600;
line-height:2.8;
text-transform: uppercase;
color: ${(props) => props.theme.colors.primaryText};
padding: ${(props) => props.theme.spacing(6)} 0;
`

export const List = styled.ul`
display: flex;
justify-content:space-between;
width:100%;
height:auto;
  
`


export const Item = styled.li`
display: flex;
flex-wrap:nowrap;
align-items:center;
flex-direction: column;
justify-content:center;
width:calc(100% / 5);
padding: ${(props) => props.theme.spacing(5)};
background-color: ${generateDarkColorHex};

`

export const Label = styled.span`
font-size:16px;
font-weight:400;
line-height:1.8;
color: ${(props)=>props.theme.colors.white};

`

export const  Percentage = styled.span`
font-size:24px;
font-weight:500;
line-height:2.8;
color: ${(props)=>props.theme.colors.white};
`
    
  







 