/*
 * @Author: your name
 * @Date: 2020-04-14 09:17:07
 * @LastEditTime: 2020-04-14 09:46:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_demo1/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'

function CommentItem(props) {
  let {list: { name, content }} = props
  return(
    <li>
      <p>评论人: {name}</p>
      <p>评论内容: {content}</p>
    </li>
  )
}

class CommentList extends React.Component {
  state = {
    list: [
      {id: 1, name: 'cc', content: '11'},
      {id: 2, name: 'bb', content: '22'},
      {id: 3, name: 'dd', content: '33'}
    ],
    uname: '',
    content: ''
  }

  render() {
    return (
      <div>
        <div>
          <input name='uname' value={this.state.uname} onChange={this.handle.bind(this)}/>
          <br/>
          <textarea name='content' cols='30' rows='10' value={this.state.content} onChange={this.handle.bind(this)}/>
          <button onClick={this.add.bind(this)}>添加</button>
        </div>
        <h3>评论列表如下:</h3>
        <ul>
          {this.state.list.map((v, i) => {
            return (
              <CommentItem key={v.id} list={v}/>
            )
          })}
        </ul>
      </div>
    )
  }
  handle(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  add() {
    let id = new Date().getTime()
    let name = this.state.uname
    let content = this.state.content
    this.state.list.unshift({
      id,
      name,
      content
    })  
    this.setState({
      list: this.state.list,
      uname: '',
      content: ''
    }) 
  }
}

ReactDOM.render(<CommentList />, document.getElementById('root'))