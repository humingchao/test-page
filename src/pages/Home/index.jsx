
import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Layout } from 'antd';

import './index.less';

import Second from '@/components/Second';

class Home extends React.Component {

    async componentDidMount() {
        await setTimeout(()=> {
            console.info('Home page 123');
        }, 1000)
        console.info('Home page');
    }

    render() {

        return (
            <Layout className="home-page-container">
                <Switch>
                    <Route path="/home/second" component={Second} />
                </Switch>
            </Layout>
        )
    }
}

export default Home;