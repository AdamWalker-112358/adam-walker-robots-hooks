import React, {useContext} from "react";
import Card from "./Card";
import styled from "styled-components";
import {GlobalContext} from '../context/globalContext.js';

const List = () => {
  const { robots_list, update_profile } = useContext(GlobalContext)

  return (
    <Box>
      <ul>
        {robots_list?.
          map(item => item.show && 
            <CardItem key={item.id} onClick={() => update_profile(item)}>
              <Card {...item} />
            </CardItem>
          )
        }
      </ul>
    </Box>
  );
};

export default List;

const Box = styled.div`
  background: oldlace;
  max-height: 65rem;
  min-width: 56rem;
  border-radius: 0.4rem;
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: 0 0.2rem 0.8rem DimGrey;
`;

const CardItem = styled.li`
  &:nth-child(even) {
    background: honeydew;
  }
  &:nth-child(odd) {
    background: white;
  }
`;
