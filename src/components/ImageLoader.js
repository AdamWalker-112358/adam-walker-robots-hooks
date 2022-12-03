import React, { useState,  } from "react";
import styled from "styled-components";

function ImageLoader(props) {


  const [is_loading, setIsLoading] = useState(true)
  const [source, setSource] = useState(props.source)
  const [count, setCount] = useState(0)
  const { container } = props;

  const onImageLoad = () => {
    setIsLoading(false)
  };
  const onImageError = () => {
    if (count <= 5) {
      console.log("reloading ,", count);
      setCount(count + 1)
      setSource(`${props.source}?r=${Math.random()}`)
    }
  };

  return (
    <Box>
      <Icon show={is_loading}>
        <span aria-label="bot icon" role="img">
          🤖
        </span>
      </Icon>
      <Image
        src={source}
        alt="some visual"
        show={!is_loading}
        onLoad={onImageLoad}
        onError={onImageError}
        container={container}
      />
    </Box>
  );
  
}

export default ImageLoader;

const Image = styled.img`
  opacity: ${({ show }) => (show ? 1 : 0)};
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  background-color: darksalmon;
  transition: box-shadow 150ms, margin 150ms, padding 150ms;

  ${({ container }) => `
      ${container}:hover & {
        box-shadow: 0 0.4rem 1.5rem DimGrey;
        margin-bottom: 3rem;
        padding-bottom: 1rem;
      }
  `}
`;

const Box = styled.div`
  position: relative;
`;
const Icon = styled.span`
  opacity: ${({ show }) => (show ? 1 : 0)};
  font-size: 4rem;
  position: absolute;
  height: 10rem;
  width: 10rem;
  border: lightgrey 1px solid;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
