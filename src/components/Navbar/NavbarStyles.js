import styled from 'styled-components';

export const NavbarStyles = styled.div`
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    z-index: 1;
    width: 100%;
}

.navbar-sticky {
    background: ${props => props.theme.surface};
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: ${props => {
       return props.theme.oppositeTheme === "dark" ? '1px 1px 1px #000' : '1px 1px 1px #fff';
    }};
    animation: moveDown 0.5s ease-in-out;
}

.navbar--logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Homemade Apple', cursive;
    width: 30%;
    height: 3rem;
    padding: 20px;
    animation: rotate 0.7s ease-in-out 0.5s;
}
.navbar--link {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .navbar--link-item {
        margin: 0px 20px;
        font-family: 'Roboto', sans-serif;
    }
    button {
        font-family: 'Roboto', sans-serif;
        background: ${props => props.theme.buttonbg};
        color: ${props => props.theme.buttoncolor};
        margin: 0px 20px;

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