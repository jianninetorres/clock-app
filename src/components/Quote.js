import React, { useRef, useState, useEffect } from "react";
import refresh from "../images/icon-refresh.svg";

import styled from "styled-components";

const QuoteStyles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 1;
  flex: 1 1 auto;
  padding: var(--base-size);
  @media screen and (min-width: 568px) {
    padding: 0 calc(var(--base-size) * 2);
    max-width: 540px;
  }
  @media screen and (min-width: 1200px) {
    padding-top: calc(var(--base-size) * 4);
  }

  blockquote {
    padding-right: var(--base-size);
    @media screen and (min-width: 768px) {
      padding-top: calc(var(--base-size) * 2);
    }
  }

  img {
    @media screen and (min-width: 768px) {
      padding-top: calc(var(--base-size) * 2);
    }
  }

  p {
    color: var(--white);
    margin-top: var(--base-size);
  }
`;

const Quote = () => {
  const QUOTE_API = "https://api.quotable.io/random";
  const [quote, setQuote] = useState(null);
  const [quoteAuthor, setQuoteAuthor] = useState(null);
  const [refreshRotate, setRefreshRotate] = useState(360);
  const imgRef = useRef(); // referring to a dom element

  // ------ Get quote ------ //
  const getQuote = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setQuote(data.content);
    setQuoteAuthor(data.author);
  };

  const onClickRefresh = () => {
    setRefreshRotate((prevState) => (prevState += 360));
    imgRef.current.style = `transform: rotate(${refreshRotate}deg); transition: transform 0.5s ease-in-out`;
    setTimeout(() => {
      getQuote(QUOTE_API);
    }, 200);
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getQuote(QUOTE_API);
    }

    return () => {
      mounted = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QuoteStyles>
      <div>
        {quote && <blockquote>“{quote}”</blockquote>}
        {quoteAuthor && <p>{quoteAuthor}</p>}
      </div>
      {quote && quoteAuthor && (
        <img src={refresh} alt="" ref={imgRef} onClick={onClickRefresh} />
      )}
    </QuoteStyles>
  );
};

export default Quote;
