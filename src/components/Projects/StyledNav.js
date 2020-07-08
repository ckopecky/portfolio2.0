import styled from 'styled-components';

export const StyledNav = styled.nav`
	border-radius: 30px 30px 0px 0px;
	display: flex;
    flex-direction: column;
	cursor: pointer;
	background: ${(props) => props.theme.background};
	align-items: center;
	#projects {
		width: 100%;
        font-variant: small-caps;
        font-size: 3rem;
        font-weight: bold;
        text-align: left;
	}
	div {
		margin: 0px 10px;
		font-variant: small-caps;
	}
`;
