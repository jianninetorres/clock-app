import React, { useRef, useState } from "react";
import refresh from "../images/icon-refresh.svg";

import styled from "styled-components";

const QuoteStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  z-index: 1;

  p {
    color: var(--white);
    margin-top: var(--base-size);
  }
`;

const Quote = ({ quote, quoteAuthor }) => {
  const [refreshRotate, setRefreshRotate] = useState(360);
  const imgRef = useRef();
  const onClickRefresh = () => {
    setRefreshRotate((prevState) => (prevState += 360));
    imgRef.current.style = `transform: rotate(${refreshRotate}deg); transition: transform 0.2s linear`;
  };

  return (
    <QuoteStyles>
      <div>
        {quote && <blockquote>“{quote}”</blockquote>}
        {quoteAuthor && <p>{quoteAuthor}</p>}
      </div>
      <img src={refresh} alt="" ref={imgRef} onClick={onClickRefresh} />
    </QuoteStyles>
  );
};

export default Quote;
