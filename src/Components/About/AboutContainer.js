import React from 'react';
import Resume from './Resume';

export default class AboutContainer extends React.Component {

    render() {
        return (
            <div className="About">
                <div id="timeline">
                    <h1>My Story</h1>
                    <p id="BA">
                        I got my first glimpse into the Software Development Lifecycle in 2015 when I began working as a business systems analyst. I was on a team that designed an enterprise SaaS CRM. Besides designing new features and updates for the in-house CRM, I worked on more than 50 projects with more than 25 top-tier tech companies including several from the Fortune 500.
                    </p>
                    <h3>I've seen how the big guys do things, but also how the smaller, more nimble companies can get an edge.</h3>
                    <p id="PA">
                        Although my roots are in business and technical requirements gathering, in 2017 I began focusing more on designing user experience, or what we called the "Customer Journey". Over the years, I’ve become more and more interested and involved in the design and architecture of the products. I noticed that the closer I came to the development, it became more of a bummer to hand off to the development team to take it over the finish line.
                    </p>
                    <h3>So, I decided that it’s time for me to start developing products of my own!</h3>
                    <p id="flatiron">
                        In June 2020, I completed a full-stack software development program at the Flatiron School. Here, I gained a solid foundation to start developing my <a href="#currentSkills">technical skills</a> for the road ahead.
                    </p>
                    <h3>Now, I’m ready and I couldn't be more excited to start a brand new career building software!</h3>
                    <p id="goal">
                        Today, I'm searching for a company that prides itself on its <span class="pop">innovation</span> and <span class="pop">champions employees</span> to bring to life software solutions that can <span class="pop">change the world</span> for the better.
                    </p>
                    <div id="arrow"></div>
                </div>
                <div id="currentSkills">
                    <h1>My Skills At A Glance</h1>
                    <div id="skillGraph">
                        {/* // this will be a bubble chart with animation so bubbles move a little */}
                    </div>
                </div>
                <Resume />
            </div>
        )
    }
}