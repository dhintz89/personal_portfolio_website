import React from 'react';
import Layout from '../Structure/Layout';

class ProjectsContainer extends React.Component {
    render() {
        return(
            <Layout displayHeader={true}>
                <div class="Projects">
                    Here are my projects
                </div>
            </Layout>
        )
    }
}

export default ProjectsContainer;