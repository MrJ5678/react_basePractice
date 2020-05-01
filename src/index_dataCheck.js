/*
 * @Author: your name
 * @Date: 2020-04-18 15:24:19
 * @LastEditTime: 2020-04-18 16:13:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_demo1/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

class Father extends React.Component {
  state = {}

  render() {
    return (
      <div>
        父组件: <Son msg='ma' fn={this.pfn}/>
      </div>
    )
  }
  pfn() {console.log('父组件方法')}
}

class Son extends React.Component {
  state = {}

  static defaultProps = {
    name: 'name属性默认值'
  }

  static propTypes = {
    msg: PropTypes.string,
    fn: PropTypes.func,
    name: PropTypes.string.isRequired
  }
  
  render() {
    return (
      <div>
        子组件: 
        <p>{this.props.msg}</p>
        <p>{this.props.name}</p>
        <button onClick={this.f.bind(this)}>按钮</button>
      </div>
    )
  }
  f() {
    this.props.fn()
  }
}

ReactDOM.render(<Father />, document.getElementById('root'))