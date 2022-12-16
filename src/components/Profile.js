import React, {useContext} from "react";
import styled from "styled-components";
import { Title } from "../styles/text.styled";
import { GlobalContext } from "../context/globalContext";

const Profile = () => {
  const { profile_data } = useContext(GlobalContext);
  let { id, first_name, last_name, email, country, description, avatar } = profile_data;
  avatar = avatar.replace("100x100", "300x300");

  return (
    <Box>
      <ImageBox><img src={avatar} alt="avatar"/></ImageBox>
      <DetailsBox>
        <Title>{first_name} {last_name}</Title>
        <Line/>
        <Detail>id: {id}</Detail>
        <Detail>country: {country}</Detail>
        <Detail>email: {email}</Detail>
        <Description>{description}</Description>
      </DetailsBox>
    </Box>
  );
};

export default Profile;

const Box = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  padding-right: 15px;
  align-items: center;
`;
const ImageBox = styled.div`
  background: peachpuff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 30rem;
  height: 30rem;
  img {
    border-radius: 50%;
    width: 30rem;
  }
`;
const DetailsBox = styled.div`
  padding: 10px;
  font-family: "Expletus Sans";
  text-align: left;
  color: slategray;
  font-weight: 400;
`;
const Line = styled.span`
  margin-top: 2rem;
  display: block;
  width: 100%;
  border: none;
  height: 1px;
  background: -webkit-gradient(
    radial,
    50% 50%,
    0,
    50% 50%,
    200,
    from(midnightblue),
    to(Cornsilk)
  );
`;
const Detail = styled.h5`
  margin-top: ${({ mt }) => mt || 0};
  font-size: 2.2rem;
  font-weight: inherit;
  color: darkslateblue;
`;
const Description = styled.p`
  margin-top: 2rem;
  font-family: "Raleway";
  font-size: 1.8rem;
  max-width: 40rem;
`;
