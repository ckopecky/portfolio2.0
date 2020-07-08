import styled from 'styled-components';


export const H2BlogContainerStyle = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.background};
    border-radius: 30px;
	margin: 20px auto;
    padding: 20px 30px;
    h2 {
        padding-left: 25px;
        font-weight: bolder;
        width: 100%;
        font-variant: small-caps;
        font-size: 3rem;
        text-align: left;
    }
    @media screen and (max-width: 900px){
        flex-direction: column;
        h2 {
            padding-left: 0px;
            text-align: center;
        }
    }


`
export const BlogContainerStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    @media screen and (max-width: 900px){
        flex-direction: column;
    }


`
export const BlogStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    border-radius: 20px;
    margin: 20px auto;
    border: ${(props) => {
			return props.theme.oppositeTheme === 'dark'
				? '1px solid black'
				: '1px solid darkgrey';
	}};
    @media screen and (max-width: 900px){
        padding: 0;
        width: 100%;
    }


`

export const BlogImg = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;

`

export const BlogBody = styled.div`
    display: flex;  
    flex-direction: column;
    width: 100%;
    min-height: 100px;
    height: 100%;
    background-color: ${(props) => {
      return props.theme.oppositeTheme === 'dark'
        ? 'whitesmoke'
        : 'rgba(0, 0, 102, 1)';
	  }};
    color: ${props => props.theme.onSurface};
    border-radius: 0px 0px 20px 20px;

`

export const BlogTitle = styled.h3`
    font-weight: bold;
    font-size: 1.8rem;
    margin: 20px 20px 0px 20px;
    min-height: 50px;
    display: flex;
    align-items: center;
`

export const BlogDescription = styled.p`
    margin: 0px 20px 20px 20px;
    padding: 10px 0px;
    min-height: 50px;
    height: 100%;
    text-align: left;
`

export const BlogLink = styled.a`
    color: ${props => props.theme.onBackground};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: medium;
    margin: 0px 20px;
    min-height: 30px;
    height: 100%;
`