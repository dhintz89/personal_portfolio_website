import React, {Component} from 'react';
import SelectBox from './SelectBox';

class SiteCustomizer extends Component {
    
    state = {
        listOpen: false,
        optionList: {
            Background: [
                {
                    id: 0,
                    title: "White",
                    value: "#ffffff",
                    cat: '--background-color'
                },
                {
                    id: 1,
                    title: "Black",
                    value: "#000000",
                    cat: '--background-color'
                },
                {
                    id: 2,
                    title: "Light Grey",
                    value: "#a6a6a6",
                    cat: '--background-color'
                },
                {
                    id: 3,
                    title: "Dark Grey",
                    value: "#424242",
                    cat: '--background-color'
                },
                {
                    id: 4,
                    title: "Tan",
                    value: "#FFFAE6",
                    cat: '--background-color'
                },
                {
                    id: 5,
                    title: "Light Blue",
                    value: "#619DFF",
                    cat: '--background-color'
                },
                {
                    id: 6,
                    title: "Dark Blue",
                    value: "#00004B",
                    cat: '--background-color'
                }
            ],
            Text: [
                {
                    id: 0,
                    title: "White",
                    value: "#ffffff",
                    cat: '--font-color'
                },
                {
                    id: 1,
                    title: "Black",
                    value: "#000000",
                    cat: '--font-color'
                },
                {
                    id: 2,
                    title: "Light Grey",
                    value: "#a6a6a6",
                    cat: '--font-color'
                },
                {
                    id: 3,
                    title: "Dark Grey",
                    value: "#424242",
                    cat: '--font-color'
                },
                {
                    id: 4,
                    title: "Tan",
                    value: "#FFFAE6",
                    cat: '--font-color'
                },
                {
                    id: 5,
                    title: "Light Blue",
                    value: "#619DFF",
                    cat: '--font-color'
                },
                {
                    id: 6,
                    title: "Dark Blue",
                    value: "#00004B",
                    cat: '--font-color'
                }
            ],
            Accent: [
                {
                    id: 0,
                    title: "Light Grey",
                    value: "#a6a6a6",
                    cat: '--button-color'
                },
                {
                    id: 1,
                    title: "Dark Grey",
                    value: "#424242",
                    cat: '--button-color'
                },
                {
                    id: 2,
                    title: "Green",
                    value: "#07910c",
                    cat: '--button-color'
                },
                {
                    id: 3,
                    title: "Red",
                    value: "#9e0000",
                    cat: '--button-color'
                },
            ]
        }
    }
    
    toggleWindow = () => {
        const el = document.querySelector(".customizeMenu");
        el.classList.contains("hidden") 
            ? el.classList.remove("hidden") // open list (remove hidden class from div)
            : el.classList.add("hidden"); // close list (hide div) 
    }
    
    render() {
        return (
            <div className="optionsWrapper">
                <div className="optionsHeader" onClick={this.toggleWindow}><h3>Customize Your Own Site!</h3></div>
                <div className="customizeMenu hidden">
                    {/* map across optionList values (aka option categories) to pass the category name as title & the array of option objects as options */}
                    {Object.entries(this.state.optionList).map(([key, val], idx) => <SelectBox key={idx} title={key.toString()} options={val} />)}
                </div>
            </div>
        )
    }
}

export default SiteCustomizer;