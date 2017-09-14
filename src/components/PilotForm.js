import React, {Component} from 'react';

class PilotForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
    };

  }

    updateName(event) {
      this.setState({
        name: event.target.value
      });
    }

  render () {

    return (
      <div className="pilot-form">
        <h3>What is your name, pilot?</h3>
        <input type="text" placeholder="Enter Name Here"
        onChange={(event) => this.updateName(event)}
        value={this.state.name} />
        <h5>{this.state.name}</h5>
      </div>
    );
  };

}

export default PilotForm;
