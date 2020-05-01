/*
 * @Author: your name
 * @Date: 2020-04-15 09:10:56
 * @LastEditTime: 2020-04-15 09:47:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_demo1/src/Components/CommentForm.js
 */
import React from 'react'

class CommentForm extends React.Component {
  state = {
    uname: '',
    content: ''
  }
  render() {
    return (
      <>
        <div>
          评论人 : <input 
                    name='uname' 
                    value={this.state.uname} 
                    onChange={this.handle.bind(this)}
                  />
        </div>
        <div>
          评论内容 : <textarea cols='30' rows='10' 
                      name='content' 
                      value={this.state.content} 
                      onChange={this.handle.bind(this)}
                    />
          <button onClick={this.add.bind(this)}>按钮</button>
        </div>
      </>
    )
  }
  handle(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  add() {
    const {uname, content} = this.state
    this.props.add(uname, content)
    this.setState({
      uname: '',
      content: ''
    })
  }
}

export default CommentForm