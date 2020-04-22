import React from 'react';
import styled from 'styled-components';
import PreviewPicImg from '../assets/screenshotdark.png';

const PreviewPicsStyles = styled.img`
    width: 100%;

`;
const PreviewPic = (props) => {
    return (
        <PreviewPicsStyles src={PreviewPicImg} alt="Christina K - software developer"/>
    );
};

export default PreviewPic;