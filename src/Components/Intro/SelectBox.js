import React from 'react';

// pass css variable attribute name (option.cat) & color value selected button (option.value) to update given CSS variable value
const changePageStyle = (attr, selection) => {
    document.documentElement.style.setProperty(attr, selection);
}

// props = {title: "title", options: [{key1: val1}, {key2: val2}]}
const SelectBox = props => {
    return (
        <div className="optionGroupWrapper">
            <h4 className="optionGroupHeader">{props.title}</h4>
            {/* map across the array of option objects to create a button from each option */}
            <div className="options">{props.options.map(option => <button key={option.id} style={{backgroundColor:option.value}} onClick={() => changePageStyle(option.cat, option.value)}/>)}</div>
        </div>
    )
}

export default SelectBox; 