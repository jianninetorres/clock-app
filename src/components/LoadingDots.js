import React from "react";
import styled from "styled-components";

const LoadingDotsStyles = styled.div`
  padding: calc(var(--base-size) * 2) var(--base-size);

  @media screen and (min-width: 568px) {
    padding: calc(var(--base-size) * 4) calc(var(--base-size) * 2)
      calc(var(--base-size) * 2);
  }

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
  return (
    <LoadingDotsStyles className="loading">
      Getting more time data
    </LoadingDotsStyles>
  );
};
export default LoadingDots;
