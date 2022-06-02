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
padding:12px;

    
`
export const Card = styled.div`
text-align: center;
display: block;
  margin: 0 auto;

    
`

export const List = styled.ul`
display: flex;
  justify-content:space-between;
`


export const Title = styled.h2`
text-transform: uppercase;
`

export const Item = styled.li`
display: flex;
flex-wrap:nowrap;
align-items:center;
flex-direction: column;
justify-content:center;
font-size:16px;
width:calc(100% / 5);
background-color: ${generateDarkColorHex()};

`

export const Label = styled.span`
font-size: 16px;
`

export const  Percentage = styled.span`
 font-size: 16px;
  margin-left:10px;
`
    
  







 