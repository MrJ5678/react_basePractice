/*
 * @Author: your name
 * @Date: 2020-04-13 07:37:03
 * @LastEditTime: 2020-04-13 08:58:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_demo1/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Child extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      uname: 'zs',
      // style: {color: 'red', fontSize: '30px'}
    }
  }
  render() {
    let obj = {color: 'red', fontSize: '30px'}
    return (
      <div>
        <label htmlFor='ipt'>用户名 </label>
        <input 
          id='ipt'
          className='cls'
        />
        <p className='cls'>类样式</p>
        <p style={obj}>行内样式</p>
        <p>{this.state.uname}</p>
      </div>
    )
  }
}

ReactDOM.render(<Child />, document.getElementById('root'))