import React from "react";
import styled from "styled-components";

const LoadingDotsStyles = styled.div`
  font-size: 8rem;

  &::after {
    content: ".";
    animation: dots 1s steps(5, end) infinite;
  }

  @keyframes dots {
    0%,
    20% {
      color: rgba(0, 0, 0, 0);
      text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
    }
    40% {
      color: var(--white);
      text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
    }
    60% {
      text-shadow: 0.25em 0 0 var(--white), 0.5em 0 0 rgba(0, 0, 0, 0);
    }
    80%,
    100% {
      text-shadow: 0.25em 0 0 var(--white), 0.5em 0 0 var(--white);
    }
  }
`;

const LoadingDots = () => {
  return <LoadingDotsStyles className="loading"></LoadingDotsStyles>;
};
export default LoadingDots;
