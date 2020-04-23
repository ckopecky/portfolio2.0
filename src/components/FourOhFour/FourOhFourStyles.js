import styled from 'styled-components';

export const FourOhFourStyles = styled.div`
    height: 100%;
    width: 100%;
    display: flex;

    .four-oh-four-box {
        width: 50%;
        height: 300px;
        background: ${props => {
            return props.theme.surface;
        }};
        margin: auto;
        border: ${props => {
            return props.theme.oppositeTheme === 'dark' ? '10px double black' : '10px double lightgrey';
        }};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1 {
            font-variant: small-caps;
        }
        a {
            color: ${(props) => props.theme.secondaryVariant}
        }

    }
    color: ${(props) => {
		return props.theme.onSurface;
	}};


`