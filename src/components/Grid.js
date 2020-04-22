import React from 'react';
import styled from 'styled-components';

const GridStyles = styled.div`
    width: 80%;
    margin: 20px auto;
    .grid-container {
        display: grid;
        grid-template-columns: auto;
        grid-gap: 20px;
        padding: 20px;
        grid-auto-rows: 300px;
    };
    
    .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
    };
    .item1 {
        grid-column-start: 1;
        grid-column-end: 2;
    };
    .item3 {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 3;

    };

    .item3 {
        grid-column-start: 2;
        grid-column-end: 3;
    };






`;



const Grid = () => {
    return (
        <React.Fragment>
            <h1>Grid Lines</h1>
            <GridStyles>
                <div class="grid-container">
                    <div class="item1">1</div>
                    <div class="item2">2</div>
                    <div class="item3">3</div>  
                    <div class="item4">4</div>
                    <div class="item5">5</div>
                </div>
            </GridStyles>
        </React.Fragment>

        
    );
};

export default Grid;