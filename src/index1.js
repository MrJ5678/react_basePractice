/*
 * @Author: your name
 * @Date: 2020-04-11 21:55:40
 * @LastEditTime: 2020-04-12 17:53:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_demo1/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// function Child({name, age}) {
//   return (
//     <>
//     <div>hehe==={name}</div>
//     <div>hehe==={age}</div>
//     </>
//   )
// }
class Child extends React.Component {
  constructor(props) {
    super(props)
    // this.fn1 = this.fn1.bind(this)
    // this.state = {
    //   name: 'ls'
    // }
  }
  // state = {
  //   name: 'zs'
  // }
  state = {
    list1: ['zs','ls','ww']
  }
  render() {
    return <div>
      {this.state.list1.map(v => <p>{v}</p>)}
    </div>
    // return (
    //   <>
    //     {/* <button onClick={this.fn.bind(this, this.props.age)}>按钮bind方法</button> */}
    //     {/* <button onClick={this.fn1}>按钮bind写在constructor里</button> */}
    //     {/* <button onClick={this.fn2}>按钮属性初始化语法</button> */}
    //     {/* <button onClick={() => this.fn3()}>按钮箭头函数</button> */}
    //   </>
    // )
  }
  
  // fn3() {
  //   console.log(this)
  // }
  // fn2 = () => {
  //   console.log(this.state.name)
  // }
  // fn1() {
  //   console.log(this.state.name);
  // }
  // fn(num, e) {
  //   console.log(num, e.target.innerText);
  // }
  // componentDidMount() {
  //   this.setState({
  //     isLogin: false
  //   })
  // }
}


ReactDOM.render(<Child name={'zs'} age={30}/>, document.getElementById('root'))