import React, { useState } from 'react';
import { StyledOption } from './StyledDiv';
const Dropdown = ({handleClick}) => {

    const [ selected, setSelected ] = useState(null);
    const [ open, setOpen ] = useState(false);
    const [ labels, setLabels ] = useState(['All', 'React', 'MongoDB', 'PostgreSQL', 'Express', 'Node', 'Python']);

    const onOpen = () => {
        setOpen(!open);
    }

    const onSelect = (option) => {
        setSelected(option);
        setOpen(false);
    }

    const getOptions = () => {
        return labels.map( (label, index) => <Option key={label} option={label} index={index} handleClick={handleClick} onSelect={onSelect} />);
    }

    let items = getOptions();
    let selectedOption = selected ? selected : 'Select';
    let cssClass = open ? 'show': 'hide';

    return (
        <StyledOption className="select" onClick={onOpen}>
            <>

                <div>{selectedOption}</div>
            </>
            <div className={`list ${cssClass}`}>{items}</div>
        </StyledOption>
    );
};

const Option = ({handleClick, onSelect, option, index}) => {
    const handleSelect = (e) => {
        e.preventDefault();
        handleClick(e);
        onSelect(option.toLowerCase());
    }
    return (
        <div key={index} onClick={handleSelect} value={option.toLowerCase()} className={option.toLowerCase()}>{option}</div>
    )
}

export default Dropdown;