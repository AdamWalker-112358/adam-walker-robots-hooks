import React, { useContext } from "react";
import List from "./List";
import Filter from "./Filter";
import Profile from "./Profile";
import styled from "styled-components";
import {GlobalContext} from '../context/globalContext.js';


export default function App() {
  const {error_msg, is_loading} = useContext(GlobalContext)   
  if (error_msg) return <h1>{error_msg}</h1>;

  return <Box> {
    is_loading ? <h1>Loading...</h1> :
      <React.Fragment>
        <Filter/>
        <ContentBox>
          <Profile/>
          <List/>
        </ContentBox>
      </React.Fragment>
  } </Box>
}

const ContentBox = styled.div`
  border-radius: 5px;
  display: flex;
`;

const Box = styled.div`
  background: Cornsilk;
  padding: 8.5rem 1.5rem 1.5rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  position: relative;
  min-width: 60rem;
  min-height: 45vh;

  & > h1 {
    font-family: "Expletus Sans";
    font-size: 3.5rem;
    font-weight: 400;
    color: maroon;
  }
`;
