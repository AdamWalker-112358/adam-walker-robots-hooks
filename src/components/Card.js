import React from "react";
import styled from "styled-components";
import ImageLoader from "./ImageLoader";
import { Title } from "../styles/text.styled";

const Card = ({ first_name, country, description, avatar }) => {
  return (
    <Box>
      <ImageLoader source={avatar} container={Box} />
      <TextsBox>
        <Title>
          {first_name} from {country}
        </Title>
        <Msg>{description}</Msg>
      </TextsBox>
    </Box>
  );
};
export default Card;

const Msg = styled.p`
  font-family: "Raleway";
  font-size: 1.4rem;
  max-width: 35rem;
  transition: color 150ms;
`;

const TextsBox = styled.div`
  padding-left: 2.8rem;
`;
const Box = styled.div`
  padding: 2rem 2.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background: paleturquoise;
  }

  &:active {
    background: skyblue;
    color: white;
    ${Title} {
      color: white;
    }
  }
`;
