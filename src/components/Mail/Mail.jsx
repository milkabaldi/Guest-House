
import React from 'react'
import './Mail.css'

class Mail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your email ' + this.state.value + ' was sending');
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="sub-form">
          <label className='sub-form_label '>
            <input className='p__blacksans' type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input className='app__btn-black app__button' type="submit" value="Submit" />

          </div>
          
        </form>
      );
    }
  }

  export default Mail