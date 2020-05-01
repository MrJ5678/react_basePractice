/*
 * @Author: your name
 * @Date: 2020-04-14 08:25:54
 * @LastEditTime: 2020-04-14 08:59:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react_demo1/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Child extends React.Component {
  state = {
    uname: 'zs',
    content: '评论内容',
    city: 'gz'
  }
  render() {
    return (
      <div>
        <div>
          用户名:
          <input 
            name='uname'
            value={this.state.uname} 
            onChange={this.handle.bind(this)}
          />
        </div>
        <div>
        主内容:
        <textarea cols='30' rows='10' 
          name='content'
          value={this.state.content}
          onChange={this.handle.bind(this)}
        />
        </div>
        城市:
        <select name='city' value={this.state.city} onChange={this.handle.bind(this)}>
          <option value='bj'>北京</option>
          <option value='sh'>上海</option>
          <option value='gz'>广州</option>
        </select>
      </div>
    )
  }
  handleIpt(e) {
    this.setState({
      uname: e.target.value
    })
  }
  handleTex(e) {
    this.setState({
      content: e.target.value
    })
  }
  handleSel(e) {
    this.setState({
      city: e.target.value
    })
  }
  handle(e) {
    // console.log(e.target.value);
    // console.log(e.target.name);
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }
}

ReactDOM.render(<Child/>, document.getElementById('root'))