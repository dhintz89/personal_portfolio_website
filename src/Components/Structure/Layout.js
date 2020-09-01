import React from 'react';
import Header from './Header';
import Footer from './Footer';

// Pass in props from the routed components such as <Layout displayHeader={true/false} to dictate whether or not header is displayed>
// Currently all pages use the same layout (all pass the displayHeader=true) as this was for demonstration purposes only
const Layout = props => {
    return (
      <div>
        {props.displayHeader &&  /* && represents an inline if statement */
          <Header/>
        }
        <div className="content">
          {props.children}
          {/* anything else you want to appear on every page that uses this layout */}
        </div>
        <Footer/>
      </div>
    );
  }

  export default Layout;