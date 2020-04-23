import styled from 'styled-components';


export const StyledDiv = styled.div`
	background-image: ${(props) => {
		return `url(${props.project.images[0]})`;
	}};
	background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;

    .show {
        display: none !important;
        background: rgba(255,255,255, .8);
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