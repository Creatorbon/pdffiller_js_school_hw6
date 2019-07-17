import React from 'react';
import PureAlert from './Alert';
import withPortal from "../hoc/withPortal";
import withDelete from '../hoc/withDelete';

const DELAY = 2000;
const alertsListContainer = document.getElementById('alert-list');

const Alert = withPortal(alertsListContainer)(PureAlert);
const AlertWithDelete = withDelete(DELAY)(Alert)

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
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center" >
          <form className="input-group col-lg-5" onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.value} ref={this.refForInput} className="form-control form-control-lg" type="text" placeholder="Type allert message here" />
            <input type="submit" value="Add allert" className="btn btn-secondary btn-lg" disabled={!this.state.value} />
          </form>
        </div>
        <>
          {this.state.alerts.map((elem, index) => (
            <AlertWithDelete key={index} message={elem} />
          ))}
        </>
      </div>
    );
  }
}

export default App;
