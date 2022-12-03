import React from "react";
import Card from "./Card";
import styled from "styled-components";

const List = ({ list_data, pick }) => {
  console.log('Render')
  console.log(list_data.filter(item => item.show))
  return (
    <Box>
      <ul>
        {list_data.map( (item) =>
            item.show && (
              <CardItem key={item.id} onClick={() => pick(item)}>
                <Card {...item} />
              </CardItem>
            )
        )}
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
