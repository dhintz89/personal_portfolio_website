import React from 'react';
import Resume from './Resume';

export default class AboutContainer extends React.Component {


    render() {
        return (
            <div className="About">
                <h1>My Story</h1>
                <p>I was working hard at a New York Job making dough but it was making me blue.</p>
                <Resume />
            </div>
        )
    }
}