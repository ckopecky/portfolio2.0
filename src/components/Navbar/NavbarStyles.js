import styled from 'styled-components';

export const TopNavBarStyle = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    min-height: 50px;
    width: 100%;
    background: ${props => props.theme.surface};
    .navbar {
        margin-bottom: 0px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .navbar--logo {
            font-family: 'Homemade Apple', cursive;
            width: 30%;
            font-size: 2rem;
            padding: 20px;
            @media screen and (max-width: 900px){
                width: 50%;
                padding: 0;
                margin: 0;
            } 
        }
        .navbar--link {
            width: 70%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            @media screen and (max-width: 900px){
                width: 50%;
            }
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
                
                }

            }
        }
    }


`
