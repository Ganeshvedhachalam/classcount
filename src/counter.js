

import React  ,{Component} from  "react"

class Counter extends Component {
    constructor(props){
        super(props);
        this.state ={
            count:0
        }
    }
    increment =()=>{
     this.setState({count:this.state.count+1})
    }
    decrement =()=>{
        this.setState({count:this.state.count-1})
       }

    render() {
      return (
        <div>
            <h1>Counter App</h1>
            <h3>Count: {this.state.count}</h3>
            <button style={{padding:"10px",width:"200px",height:"70px" ,margin:"15px",fontWeight:"bolder",fontSize:"20px"}} 
            onClick={this.increment}>Increment</button>
            <button style={{padding:"10px",width:"200px",margin:"15px",height :"70px",fontWeight:"bolder",fontSize:"20px"}}
             onClick={this.decrement}>Decrement</button>
        </div>
      )
    }
}
export default Counter;