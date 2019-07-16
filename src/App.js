import React from 'react';
import './App.css';
import AlertsList from './AlertsList';
import withPortal from "./withPortal";

const alertsListContainer = document.getElementById('alert-list');

const Alert = withPortal(alertsListContainer)(AlertsList);

class App extends React.Component {
  state = {
    value: "",
    alerts: [],
  }

  refForInput = React.createRef();

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
    console.log(this.state)
  }

  handleSubmit = event => {
    event.preventDefault();
    const { value, alerts } = this.state;
    if (value) {
      this.setState({
        alerts: [...alerts, value]
      })
    }
    this.setState({ value: "" });
    this.refForInput.current.focus();
    console.log(this.state)
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center" >
          <form className="input-group col-lg-5" onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.value} ref={this.refForInput} className="form-control form-control-lg" type="text" placeholder="Type allert message here" />
            <input type="submit" value="Add allert" className="btn btn-secondary btn-lg" disabled={!this.state.value}/>
          </form>
        </div>
        <Alert alerts={this.state.alerts}/>
      </div>
    );
  }
}

export default App;
