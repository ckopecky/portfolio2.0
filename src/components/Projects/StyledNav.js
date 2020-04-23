import styled from 'styled-components';

export const StyledNav = styled.nav`
    border-radius: 30px 30px 0px 0px;
	display: flex;
    cursor: pointer;
    background: ${props => props.theme.background};
    justify-content: center;
    div {
        margin: 0px 10px;
        font-variant: small-caps;
    }
`;