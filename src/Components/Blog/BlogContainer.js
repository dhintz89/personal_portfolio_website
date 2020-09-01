import React, {Component} from 'react';
import Layout from '../Structure/Layout';

export default class BlogContainer extends Component {
  render() {
    return(
      <Layout displayHeader={true}>
        <div className="Blog">
          <h1>Developer Blog</h1>
          <br/><p>Coming Soon...</p>
          <div className="followMe">
            <p>Follow me on DEV --> <a href="https://dev.to/dhintz89"><img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Daniel Hintz's DEV Profile" height="30" width="30"/></a></p>
          </div>
        </div>
      </Layout>
    )
  }
}
