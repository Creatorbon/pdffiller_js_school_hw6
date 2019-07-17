import React from 'react';

const Alert = ({ message }) => (
  <div className="row justify-content-center">
    <div className="alert alert-success col-lg-5" role="alert">
      {message}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
);

export default Alert;
