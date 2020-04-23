//installed packages
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//my context
import { ThemeContext } from '../../context/ThemeContext';
//my styled component
import { FourOhFourStyles } from './FourOhFourStyles';

export const FourOhFour = ({stickyRef}) => {
    const { theme } = useContext(ThemeContext);
    return (
        <FourOhFourStyles ref={stickyRef} theme={theme}>
            <div className="four-oh-four-box" theme={theme}>
                <h1 className="not-found-title">
                    <strong>404: </strong>
                    Oops! That page can't be found.
                </h1>
                <hr width="500" />

                <p className="not-found-desc">
                    It looks like nothing was found at this location. Click <Link to="/">here</Link> to go back to the home page.
                </p>
            </div>
        </FourOhFourStyles>
    )
}