import React from 'react';
import { observer, inject } from 'mobx-react';
import './index.css';
import {Button} from 'antd'

@inject('CommonStore', 'RoleStore')
@observer
class Second extends React.Component {
  
  hello = () => {
    this.props.history.push('/login')
    console.log(this
      )
  }

  render() {
    const {CommonStore} = this.props
    return (
      <div className="App">
        <header>
          {
            CommonStore.common.map(item => {
              return(
                <p>{item}</p>
              )
            })
          }
          <Button type="primary" onClick={this.hello}>Second</Button>
        </header>
      </div>
    );
  }
}

export default Second;
