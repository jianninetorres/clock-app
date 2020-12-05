import React from "react";

import styled from "styled-components";

const QuoteStyles = styled.div`
  z-index: 1;

  p {
    color: var(--white);
    margin-top: var(--base-size);
  }
`;

const Quote = ({ quote, quoteAuthor }) => {
  return (
    <QuoteStyles>
      <blockquote>“{quote}”</blockquote>
      <p>{quoteAuthor}</p>
    </QuoteStyles>
  );
};

export default Quote;
