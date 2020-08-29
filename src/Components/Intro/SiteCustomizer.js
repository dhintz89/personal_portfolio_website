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
                    key: '--background-color'
                },
                {
                    id: 1,
                    title: "Black",
                    value: "#000000",
                    key: '--background-color'
                },
                {
                    id: 2,
                    title: "Light Grey",
                    value: "#a6a6a6",
                    key: '--background-color'
                },
                {
                    id: 3,
                    title: "Dark Grey",
                    value: "#424242",
                    key: '--background-color'
                },
                {
                    id: 4,
                    title: "Tan",
                    value: "#FFFAE6",
                    key: '--background-color'
                },
                {
                    id: 5,
                    title: "Light Blue",
                    value: "#619DFF",
                    key: '--background-color'
                },
                {
                    id: 6,
                    title: "Dark Blue",
                    value: "#00004B",
                    key: '--background-color'
                }
            ],
            Main: [
                {
                    id: 0,
                    title: "White",
                    value: "#ffffff",
                    key: '--font-color'
                },
                {
                    id: 1,
                    title: "Black",
                    value: "#000000",
                    key: '--font-color'
                },
                {
                    id: 2,
                    title: "Light Grey",
                    value: "#a6a6a6",
                    key: '--font-color'
                },
                {
                    id: 3,
                    title: "Dark Grey",
                    value: "#424242",
                    key: '--font-color'
                },
                {
                    id: 4,
                    title: "Tan",
                    value: "#FFFAE6",
                    key: '--font-color'
                },
                {
                    id: 5,
                    title: "Light Blue",
                    value: "#619DFF",
                    key: '--font-color'
                },
                {
                    id: 6,
                    title: "Dark Blue",
                    value: "#00004B",
                    key: '--font-color'
                }
            ],
            Accent: [
                {
                    id: 0,
                    title: "Light Grey",
                    value: "#a6a6a6",
                    key: '--button-color'
                },
                {
                    id: 1,
                    title: "Dark Grey",
                    value: "#424242",
                    key: '--button-color'
                },
                {
                    id: 2,
                    title: "Green",
                    value: "#07910c",
                    key: '--button-color'
                },
                {
                    id: 3,
                    title: "Red",
                    value: "#9e0000",
                    key: '--button-color'
                },
            ]
        }
    }
    
    toggleWindow = () => {
        const el = document.querySelector(".customizeMenu");
        console.log("element is " + el)
        {el.classList.contains("hidden") 
            ? el.classList.remove("hidden") // open list (remove hidden class from div)
            : el.classList.add("hidden"); // close list (hide div)
        }
    }
    
    render() {
        const menuArray = [];
        Object.entries(this.state.optionList).forEach(([key, value]) => {
            // console.log("key= " + key.toString() + " and value is " + value.map(val => val.title))
            menuArray.push(<SelectBox title={key.toString()} options={value} />)
        })
        console.log(menuArray)

        return (
            <div className="optionsWrapper">
                <div className="optionsHeader" onClick={this.toggleWindow}><h3>Customize Your Own Site!</h3></div>
                <div className="customizeMenu hidden">
                    {menuArray}
                </div>
            </div>
        )
    }
}

export default SiteCustomizer;