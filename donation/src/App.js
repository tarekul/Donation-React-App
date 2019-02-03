import React, { Component } from 'react';
import DonationList from './components/DonationList'
import Progress from './components/Progress'
import Form from './components/Form'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      name:'Go Fund Mo',
      description: 'Help me go on a vacation to a beach somewhere',
      reach:6000,
      donations:[{name:'Joe',donation:50,caption:'Let\'s all give to this great cause!'},
      {name:'Joe',donation:50,caption:'Let\'s all give to this great cause!'},
      {name:'Joe',donation:50,caption:'Let\'s all give to this great cause!'},
      {name:'Joe',donation:50,caption:'Let\'s all give to this great cause!'}]
    }
  }

  addDonation = (name,donation,caption) =>{
    if(parseInt(donation) === 0) return
    const {donations} = this.state

    donations.unshift({name,donation:parseInt(donation),caption})
    this.setState({donations:donations})
    
  }

  amount(){
    return this.state.donations.reduce((acc,e)=>{
      acc += e.donation
      return acc
    },0)
  }
 
  render() {
   return (
<>
 <section className ="jumbotron text-center">
   <h1 className="jumbotron-heading">Go Fund Mo</h1>
   <p className="lead text-muted">Help me go on a vacation to a beach somewhere</p>
 </section>

 <div className='container'>
   <div className='row'>
    <ul className="col-4 list-unstyled recent-donations">
       <h5 className='my-4'>Recent Donations</h5>
       <DonationList donations = {this.state.donations} />       
     </ul>
    <div className='col-8'>
      <Progress total={this.amount()} reach={this.state.reach} />
       <hr />
       <Form addDonation = {this.addDonation}/>
    </div>
  </div>
 </div>
</>

   );
 }
}

export default App;