/*
 * @Author: your name
 * @Date: 2020-04-14 20:18:29
 * @LastEditTime: 2020-04-14 20:37:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_demo1/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'

class Father extends React.Component {
  state = {
    pmsg: '父组件数据'
  }
  render() {
    return (
      <div>
        Father
        <Son msg={this.state.pmsg} fn={this.pfn}/>
      </div>
    )
  }
  pfn(res) {
    console.log('pfn', res);
  }
}
class Son extends React.Component {
  state = {
    cmsg: '子组件数据'
  }
  render() {
    return (
      <div>
        <div>
          Son:
          {this.props.msg}
        </div>
        <button onClick={this.f.bind(this)}>子组件按钮</button>
      </div>
    )
  }
  f() {
    // console.log(this.props.fn);
    this.props.fn(this.state.cmsg)
  }
}


ReactDOM.render(<Father />, document.getElementById('root'))