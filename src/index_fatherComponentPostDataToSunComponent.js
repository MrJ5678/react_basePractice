/*
 * @Author: your name
 * @Date: 2020-04-16 16:11:29
 * @LastEditTime: 2020-04-16 16:26:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_demo1/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'

import './context.css'
// 将Father的color传给Sun组件
class Father extends React.Component {
  state = {
    color: 'red'
  }
  render() {
    return (
      <div className='fa'>
        父: <Son color={this.state.color}/>
      </div>
    )
  }
}

class Son extends React.Component {
  render() {
    return (
      <div className='son'>
        子: <Sun color={this.props.color}/>
      </div>
    )
  }

}

class Sun extends React.Component {
  render() {
    return (
      <div className='sun' style={{color: this.props.color}}>
        孙:
      </div>
    )
  }
}

ReactDOM.render(<Father />, document.getElementById('root'))