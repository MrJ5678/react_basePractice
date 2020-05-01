/*
 * @Author: your name
 * @Date: 2020-04-18 16:31:52
 * @LastEditTime: 2020-04-18 20:22:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_demo1/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'

import './context.css'

class Father extends React.Component {
  state = {
    car: '电动车',
    isShow: true
  }
  render() {
    return (
      <div>
        父组件: 
        <button onClick={this.fn.bind(this)}>按钮</button>
        {
          this.state.isShow ? <Child car={this.state.car}/> : ''
        }
      </div>
    )
  }
  fn() {
    this.setState({
      car: '汽车',
      isShow: false
    })
  }
}

class Child extends React.Component {
  // 挂载阶段*********************************
  // 1.挂载前 初始化state内的数据 得到props传来的数据
  constructor(props) {
    super(props)
    console.warn('constructor...');
    this.state = {
      count: 1,
      timerId: ''
    }
  }

  // 2.挂载前回调
  UNSAFE_componentWillMount() {
    console.warn('componentWillMount');
  }

  // 3.挂载时
  render() {
    return (
      <div className='son'>
        <div >hh ==== {this.state.count}</div>
        <p>父组件传递来的:{this.props.car}</p>
        <button onClick={this.updateName.bind(this)}>按钮</button>
      </div>
    )
  }

  // 4.挂载后
  componentDidMount() {
    let timerId = setInterval(() => {
      console.log('hehe');
    }, 1000);
    this.setState({
      timerId
    })
    console.warn('componentDidMount');
  }
  // 更新阶段***********************************
  // 0.传递到该组件到props数据改变前
  UNSAFE_componentWillReceiveProps() {
    console.warn('componentWillReceiveProps');
  }
  // 1.是否继续影响视图更新
  shouldComponentUpdate(nextProps, nextState) {
    console.warn('shouldComponentUpdate');
    return nextState.count <= 3 ? true : false
  }
  // 2.将要更新视图
  UNSAFE_componentWillUpdate() {
    console.warn('componentWillUpdate');
  }
  // 3.视图更新后
  componentDidUpdate() {
    console.warn('componentDidUpdate');
  }
  // 销毁阶段*********************************
  // 1.组件将要被销毁
  componentWillUnmount() {
    clearInterval(this.state.timerId)
    console.warn('componentWillUnmount');
  }
  // 方法
  updateName() {
    this.setState(state => {
      return {
        count: state.count + 1
      }
    })
  }
}

ReactDOM.render(<Father />, document.getElementById('root'))