import styled from 'styled-components';


export const StyledDiv = styled.div`
	background-image: ${(props) => {
		return `url(${props.project.images[0]})`;
	}};
	background-repeat: no-repeat;
    background-size: cover;
    width: 100%;

    .show {
        display: none !important;
        background: ${props => props.theme.oppositeTheme === "dark" ? 'rgba(255,255,255, .8)' : 'rgba(0, 0, 0, .8)'
        };
        height: 100%;
        width: 100%; 
        /* width and height is for background color */
        font-size: 1.8rem;


        .description {
            width: 50%;
            align-self: center;
        }
        .links {
            display: flex;
            align-self: center;
            div {
                margin: 20px;
            }
            
        }
    }
    &:hover .show {
        display: flex !important;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        cursor:pointer;
        transform: scale(1,1);
    }
    
`;

export const StyledOption = styled.div`
        border: 1px solid #000000;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        top: 0;
        margin: 0;
        background: #ffe;
    .list {
        padding: 10px 20px;
        margin: 0;
        border: 1px solid black;
        left: -1px;
        width: 50%;
    }
    .show {
        background: #fff;
        padding: 0;
        width: 100%;
    }

`