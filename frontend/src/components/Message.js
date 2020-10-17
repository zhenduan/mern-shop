import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ message, variant }) => {
  return (
    <div>
      <Alert variant={variant}>{message}</Alert>
    </div>
  );
};

export default Message;
