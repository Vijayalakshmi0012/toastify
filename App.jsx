import React,{ Component }from'react'
export  default class App extends Component{
  constructor(){
    super()
    this.state={
      username:"Appu"
    }
  }
 componentDidMount(){

    let btn=document.querySelector('button')
    btn.addEventListener("click",()=>{
      this.setState({username:this.state.username="Aryan"})
    }
    )
  }
render(){
  return(
    <>
    <div>
      <h1>{this.state.username}</h1>
    </div>
    <button>change</button>
    </>
  )
}

}