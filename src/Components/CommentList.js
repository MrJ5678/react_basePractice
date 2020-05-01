/*
 * @Author: your name
 * @Date: 2020-04-15 09:15:37
 * @LastEditTime: 2020-04-15 10:20:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_demo1/src/Components/CommentList.js
 */
import React from 'react'
import './CommentList.css'

class CommentList extends React.Component {
  
  render() {
    return (
      <div>
          <ul>
            {this.props.list.map(v => {
              return (
                <li key={v.id}>
                  <p>评论人: {v.name}</p>
                  <p>评论内容: {v.content}</p>
                  <button className='close' onClick={this.del.bind(this, v.id)}>X</button>
                </li>
              )
            })}
          </ul>
        </div>
    )
  }
  del(id) {
    // console.log(id);
    this.props.del(id)
  }
}

export default CommentList
