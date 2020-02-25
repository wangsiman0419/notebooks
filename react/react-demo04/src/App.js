import React from 'react';
import Title from './components/Title'
import axios from 'axios'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      msg:"hello world",
      playlists:[]
    }
  }
  render(){
    return(
      <div>
        <Title 
        //1.子组件的属性接收父组件传递过来的方法
        deleteItem={this.handleDelete.bind(this)}
        msg={this.state.msg}></Title>
        {this.state.playlists.map(item=>{
          return (<div key={item.id}>
          <p>{item.name}</p></div>)
        })}
      </div>
    )
  }
  handleDelete(id){
    console.log(id)
  }
  componentDidMount(){
    var url='https://music.aityp.com/top/playlist?cat=华语'
    this.$http.get(url).then(res=>{
      var playlists=res.data.playlists;
      this.setState({
        playlists
      })
    })
  }
}


export default App;
