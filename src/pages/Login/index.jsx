
import React from 'react';
import './index.less';
import { Button } from 'antd';

class Login extends React.Component {
    componentDidMount() {
        document.title = '课程表';
    }
    render() {
        return (
            <React.Fragment>
                <div className="about-page-container">
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </div>
            </React.Fragment>
        )
    }
}

export default Login