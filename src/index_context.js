/*
 * @Author: your name
 * @Date: 2020-04-16 16:28:44
 * @LastEditTime: 2020-04-16 16:51:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_demo1/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'

import './context.css'
// React.createContext
// context 包含 Provider组件和 Consumer组件
const { Provider, Consumer } = React.createContext()

// 三个类组件
class Father extends React.Component {
  state = {
    color: 'red'
  }
  render() {
    return (
      <Provider value={this.state.color}>
        <div className='fa'>
          父: <Son />
        </div>
      </Provider>
    )
  }
}

class Son extends React.Component {
  render() {
    return (
      <div className='son'>
        子: <Sun />
      </div>
    )
  }
}

class Sun extends React.Component {
  render() {
    return (
      <Consumer >
        {value => 
          (<div className='sun' style={{color: value}}>
            孙:
          </div>)
        }
      </Consumer>
    )
  }
}

ReactDOM.render(<Father />, document.getElementById('root'))