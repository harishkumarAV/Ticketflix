import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
  padding: 2rem;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 0.25rem;
  margin: 2rem auto;
  max-width: 600px;
  text-align: center;
`;

const ErrorMessage = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ErrorSubMessage = styled.p`
  font-size: 1.2rem;
`;

const BookingError = () => {
  return (
    <StyledError>
      <ErrorMessage>Booking failed</ErrorMessage>
      <ErrorSubMessage>Please try again later.</ErrorSubMessage>
    </StyledError>
  );
};

export default BookingError;
