import React, {Component} from 'react';

export default class BlogContainer extends Component {
  render() {
    return(
      <div className="Blog">
        <h1>Developer Blog</h1>
        <br/><p>More Coming Soon...</p>
        <div className="followMe">
          <p>Follow me on DEV --> <a href="https://dev.to/dhintz89"><img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Daniel Hintz's DEV Profile" height="30" width="30"/></a></p>
        </div>
      </div>
    )
  }
}
