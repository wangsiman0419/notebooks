import React from 'react';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      msg:"hello world",
      isShow:true,
      arr:[1,2,3,4,5,6]
    }
  }
  render(){
    return(
      <div>
        {/* <p>{this.state.isShow?'good':'hello world'}</p> */}
        {this.message()}
        <div onClick={this.handleClick.bind(this, "10001")}>{this.state.msg}</div>
        <input type="text" onKeyUp={this.handleKeyUp}/>
        <div>{this.state.arr.map(item=>{
        return (<p>{item}</p>)
        })}</div>
      </div>
    )
  }
  /* 第一种使用bind(this)方法
  render(){
    return(
      <div onClick={this.handleClick}>{this.state.msg}</div>
    )
  } */
  // handleClick(){
  //   this.setState({
  //     msg:"change"
  //   })
  // }
  handleClick=(id)=>{
    console.log(id)
    this.setState({
      msg:"change"
    })
  }
  handleKeyUp=(value)=>{
    console.log(value.keyCode)
  }
  message(){
    if(this.state.isShow){
      return (<span>显示</span>)
    }else{
      return (<span>隐藏</span>)
    }
  }
}
export default App;
