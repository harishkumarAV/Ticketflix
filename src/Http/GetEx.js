import axios from 'axios'
import React, { Component } from 'react'

export default class GetEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
        this.setState({posts:res.data})})
    }
  render() {

    const{posts}=this.state
    return(
        <div>
        <table style={{width:700}}>
        <tr>
        <th>UserId</th>
        <th>Title</th>
        <th>Body</th>
        </tr>
        {posts.map((post)=>{
            return(
                <tr>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                </tr>
                )
            })}
            </table>
        </div>
    )
  }
}
