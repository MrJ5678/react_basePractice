/*
 * @Author: your name
 * @Date: 2020-04-14 10:25:04
 * @LastEditTime: 2020-04-14 20:17:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_demo1/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'

class Child extends React.Component {
  // constructor(props) {
  //   super(props)

  //   // this.unameRef = React.createRef()
  //   // this.btnRef = React.createRef()
  // }
  render() {
    return (
      <div>
        <input ref={el => {this.ipt = el}} />
        <button ref={el => {this.btn = el}} onClick={this.fn.bind(this)}>按钮</button>
      </div>
    )
  }
  fn() {
    // console.log(this.unameRef.current.value);
    console.log(this.ipt, this.btn);
    
  }
}

ReactDOM.render(<Child />, document.getElementById('root'))