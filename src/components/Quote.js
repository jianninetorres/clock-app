import React from "react";

import styled from "styled-components";

const QuoteStyles = styled.div`
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
