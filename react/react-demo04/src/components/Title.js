import React from 'react'
class Title extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <h1 onClick={this.handleClick.bind(this,'1123')}>{this.props.msg}</h1>
        )
    }
    handleClick=(id)=>{
        //2.子组件调用方法，向父组件传参
        this.props.deleteItem(id)
    }
}
export default Title;