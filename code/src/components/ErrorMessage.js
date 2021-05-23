import React from 'react'; 

const ErrorMessage = ({ errorMessage }) => {
  return (
    <p 
      className="error-message"
      id="errorMessage"
    >
      {errorMessage}
    </p>
  );
};

export default ErrorMessage;