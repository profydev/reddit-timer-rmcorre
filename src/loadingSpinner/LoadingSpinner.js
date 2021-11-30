import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingSpinner = () => <Loading />;
export default LoadingSpinner;

const Spinner = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 182px;

  &:after {
    border: 6px solid #ffffff;
    border-radius: 50%;
    border-top-color: #feb756;
    border-left-color: #feb756;
    border-right-color: #feb756;
    content: '';
    height: 71px;
    width: 71px;
    animation: ${Spinner} 1.5s linear infinite;
  }
`;
