/*
 * @Author: your name
 * @Date: 2020-04-12 17:54:25
 * @LastEditTime: 2020-04-13 07:33:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_demo1/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
// 评论元素组件
function CommentItem(props) {
  // console.log(props);
  let {list: { name, content }} = props
  return (
    <li>
      <p>评论人: {name}</p>
      <p>评论内容: {content}</p>
    </li> 
  )
}
// 评论列表组件
class CommentList extends React.Component {
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
        <h3>评论列表如下:</h3>
        <ul>
          {
            this.state.list.map((v, i) => {
              return (
                <CommentItem list={v} key={v.id}/>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<CommentList/>, document.getElementById('root'))

