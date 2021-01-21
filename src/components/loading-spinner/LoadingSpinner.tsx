import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #9f0000;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      opacity: 0.9;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      transform: rotate(360deg);
      opacity: 0.9;
    }
  }
`;

const LoadingText = styled.div`
  color: white;
  position: relative;

  &:after {
    content: 'Loading...';
    position: absolute;
    top: 18px;
    left: 18px;

    animation: pulse 2s linear infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 0.9;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 0.9;
    }
`;

type Props = {
  isLoading: boolean;
};

const LoadingSpinner: React.FC<Props> = ({ isLoading }: Props) => {
  if (!isLoading) {
    return null;
  }

  return (
    <Container>
      <div>
        <Spinner />
        <LoadingText />
      </div>
    </Container>
  );
};

export default LoadingSpinner;
