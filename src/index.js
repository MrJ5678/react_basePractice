/*
 * @Author: your name
 * @Date: 2020-04-22 20:24:38
 * @LastEditTime: 2020-04-22 20:26:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_demo1/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'

class Child extends React.Component {
  render() {
    return (
      <div></div>
    )
  }
}

ReactDOM.render(<Child />, document.getElementById('root'))
