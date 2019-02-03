import React, {Component} from 'react'

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:'anonymous',
      caption:'',
      amount:0
    }
  }
  handleChange = e =>{
    if(e.target.value === '') {
      this.setState({name:'anonymous'})
      return
    }
    this.setState({name:e.target.value})
  }

  handleCapChange = e =>{
    this.setState({caption:e.target.value})
  }
  
  
  
  handleRangeChange = e =>{
    this.setState({amount:e.target.value})
  }
  
  handleClick = (e,addDonation) =>{
    console.log(this.state.name)
    if(isNaN(this.state.amount)) return
    addDonation(this.state.name,this.state.amount,this.state.caption)
  } 

  render(){
    return <form>
    <div className="form-group">
      <label>Name</label>
      <input type="text" className="form-control" id="nameInput" placeholder="John Doe" onChange={e=>this.handleChange(e)} />
    </div>
    <div className="form-group">
      <label>Caption</label>
      <input type="text" className="form-control" id="captionInput" placeholder="..." onChange={e=>this.handleCapChange(e)} />
    </div>
    <div className="form-group">
      <label>Amount to Donate</label>
      <input type="range" className="custom-range" id="amountInput" min="5" max="1000" onChange={e=>this.handleRangeChange(e)} />
      <blockquote className="blockquote text-right">
        <p className="h3 mb-0">${this.state.amount} </p>
        <button type="button" className="btn btn-lg btn-success my-4" onClick={e=>this.handleClick(e,this.props.addDonation)}>Donate</button>
      </blockquote>
    </div>
  </form>
  }
}


export default Form
