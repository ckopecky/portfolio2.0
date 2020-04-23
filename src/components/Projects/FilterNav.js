import React from 'react';



export const FilterNav = (props) => {
    const labels = ['All', 'React', 'MongoDB', 'PostgreSQL', 'Express', 'Node', 'Python']
    return (
        <nav style={{display: 'flex'}}>
            <div>Filter:</div>
            {labels.map((label, index) => {
                if(index === labels.length - 1) {
                    return (
                        <div key={index} onClick={props.handleClick} className={label.toLowerCase()}>{label}</div>
                    )
                } else {
                    return (
                        <>
                            <div key={index} onClick={props.handleClick} className={label.toLowerCase()}>{label}
                            </div>
                            <span>/</span>
                        </>
                    )
                }
            })}
            
        </nav>
    );
};

