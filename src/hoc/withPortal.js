import React from 'react';
import ReactDOM from 'react-dom';

const withPortal = domElem => (Component) => {
  class WithPortal extends React.Component {
    render() {
      return ReactDOM.createPortal(<Component {...this.props} />, domElem);
    }
  }
  return WithPortal;
};

export default withPortal;