import React from 'react';
import { observer, inject } from 'mobx-react';
import './App.css';
import {Button} from 'antd'

@inject('CommonStore', 'RoleStore')
@observer
class App extends React.Component {
  
  hello = () => {
    this.props.CommonStore.changePassword(888)
  }

  render() {
    const {CommonStore} = this.props
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {CommonStore.common}
          </p>
          <Button type="primary" onClick={this.hello}>123</Button>
        </header>
      </div>
    );
  }
}

export default App;
