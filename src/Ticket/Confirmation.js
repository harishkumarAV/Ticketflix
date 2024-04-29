import React from 'react';
import styled from 'styled-components';

const StyledConfirmation = styled.div`
  padding: 2rem;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 0.25rem;
  margin: 2rem auto;
  max-width: 600px;
  text-align: center;
`;

const ConfirmationMessage = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ConfirmationSubMessage = styled.p`
  font-size: 1.2rem;
`;

const BookingConfirmation = () => {
  return (
    <StyledConfirmation>
      <ConfirmationMessage>Your tickets have been booked!</ConfirmationMessage>
      <ConfirmationSubMessage>Thank you for choosing our service.</ConfirmationSubMessage>
    </StyledConfirmation>
  );
};

export default BookingConfirmation;
