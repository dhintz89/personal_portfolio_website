import React from 'react';

const changePageStyle = (attr, selection) => {
    document.documentElement.style.setProperty(attr, selection);
}

// props = {title: "title", options: [{key1: val1}, {key2: val2}]}
const SelectBox = props => {
    return (
        <div className="optionGroupWrapper">
            <h4 className="optionGroupHeader">{props.title}</h4>
            <div className="options">{props.options.map(option => <button id={option.id} style={{backgroundColor:option.value}} onClick={() => changePageStyle(option.key, option.value)}/>)}</div>
        </div>
    )
}

export default SelectBox; 