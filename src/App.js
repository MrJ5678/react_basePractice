/*
 * @Author: your name
 * @Date: 2020-04-14 20:42:11
 * @LastEditTime: 2020-04-15 10:26:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_demo1/src/index.js
 */
import React from 'react'

import CommentForm from './Components/CommentForm'
import CommentList from './Components/CommentList'
class App extends React.Component {
  state = {
    list: [
      {id: 1, name: 'cc', content: '11'},
      {id: 2, name: 'bb', content: '22'},
      {id: 3, name: 'dd', content: '33'}
    ]
  }
  render() {
    return (
      <div>
        {/* 表单 */}
        <CommentForm add={this.padd.bind(this)} />
        {/* 列表 */}
        <CommentList list={this.state.list} del={this.pdel.bind(this)}/>
      </div>
    )
  }
  padd(uname, content) {
    // console.log('父接收到的:',uname, content)
    let newData = {
      id: +new Date(),
      name: uname,
      content
    }
    this.setState(state => {
      return {
        list: [newData, ...state.list]
      }
    })
  }
  pdel(id) {
    // console.log('子传来的:', id);
    let newList = this.state.list.filter(v => v.id !== id)
    this.setState({
      list: newList
    })    
  }
  // add() {
  //   let newData = {
  //     id: +new Date(),
  //     name: this.state.uname,
  //     content: this.state.content
  //   }
  //   this.setState(state => {
  //     return {
  //       list: [newData ,...state.list],
  //       uname: '',
  //       content: ''
  //     }
  //   })
  // }
  // handle(e) {
  //   // console.log(e.target.value);
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }
}

export default App