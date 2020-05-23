import styled from 'styled-components';

export const NavbarStyles = styled.div`
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.surface};
    width: 100%;
    height: 30px !important;
    padding: 0 !important;
    margin-bottom: 0px;
    @media screen and (max-width: 900px){
        /* background: transparent; */
	}

}
/* 
.navbar-sticky {
    background: ${props => props.theme.surface};
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: ${props => {
       return props.theme.oppositeTheme === "dark" ? '1px 1px 1px #000' : '1px 1px 1px #fff';
    }};
    animation: moveDown 0.5s ease-in-out;
} */

.navbar--logo {
    font-family: 'Homemade Apple', cursive;
    width: 30%;
    font-size: 2rem;
    padding: 20px;
    @media screen and (max-width: 900px){
        /* display: none; */
        width: 100%;
        padding: 0;
        margin: 0;
        text-align: center;
	}
}
.navbar--link {
    width: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .navbar--link-item {
        margin: 0px 20px;
        font-family: 'Roboto', sans-serif;
        text-align: center;
        @media screen and (max-width: 900px){
        display: none;
	    }
    }
    button {
        font-family: 'Roboto', sans-serif;
        background: ${props => props.theme.buttonbg};
        color: ${props => props.theme.buttoncolor};
        margin: 0px 20px;
        @media screen and (max-width: 900px){
        display: none;
	    }

    }

    @keyframes moveDown {
        from {
            transform: translateY(-5rem);
        }
        to {
            transform: translateY(0rem);
        }
    }
}

`;

export const StyledDiv = styled.div`
    background: ${props => props.theme.surface};
    color: ${props => props.theme.onSurface};
    padding: 10px;
    margin: 0;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    @media screen and (min-width: 900px){
        display: none;
    }
`

export const ButtonStyle = styled.button`
    display: none;
    @media screen and (max-width: 900px){
        display: flex;
        font-family: 'Roboto', sans-serif;
        background: ${props => props.theme.buttonbg};
        color: ${props => props.theme.buttoncolor};
        margin: 0px 20px;
}

`