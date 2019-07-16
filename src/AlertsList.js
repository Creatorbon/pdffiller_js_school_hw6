import React from 'react';
import Alert from './Alert';

const AlertsList = ({ alerts }) => (
  <>
    {alerts.map((elem, index) => (
      <Alert key={elem} message={elem} id={index} />
    ))}
  </>
);

export default AlertsList;
