/*
 * @Author: your name
 * @Date: 2020-04-14 09:48:46
 * @LastEditTime: 2020-04-14 10:09:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_demo1/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'

class Child extends React.Component {
  state = {
    foo: true,
    counter: 1
  }
  render() {
    return (
      <>
        <div>{this.state.counter}</div>
        <button onClick={this.fn.bind(this)}>按钮</button>
      </>
    )
  }
  fn() {
    this.setState((state, props) => {
      return {
        counter: state.counter + 1
      }
    })
  }
}

ReactDOM.render(<Child />, document.getElementById('root'))