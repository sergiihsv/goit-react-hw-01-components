import styled from "@emotion/styled";


export const Table = styled.table`
	width: 60%;
	margin: 0 auto;
	text-align: center;
	border-radius: 5px;
	
	& thead th {
		text-transform: uppercase;
	}
	

    
	
	& thead th,
	& tbody td {
		border: 2px solid gray;
		width: calc(100% / 3);
	}
`;