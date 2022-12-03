import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


let num_elements = 0;

const Filter = ({ list_data, on_filter }) => {
  const update_list = (event) => {
    num_elements = 0;
    const txt = event.target.value;


    // With function components we need to create a new copy of the list, because it keeps a closure to the original list and then we pass it back to the state. 
    const filteredList = [...list_data]

    filteredList.forEach((item) => {
      item.show = item.first_name.toLowerCase().includes(txt.toLowerCase());
      if (item.show) num_elements++;
    });

   

    on_filter(filteredList);
  };

  return (
    <Header>
      <Title>{num_elements || list_data.length} items filtered</Title>
      <Input onChange={update_list} />
    </Header>
  );
};

Filter.propTypes = {
  on_filter: PropTypes.func.isRequired,
  list_data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Filter;

const Header = styled.div`
  background: lightsalmon;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0.4rem 0.4rem 0 0;
  height: 9rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.h4`
  font-family: "Expletus Sans";
  text-align: left;
  font-size: 2rem;
  font-weight: 400;
  color: darkred;
`;
const Input = styled.input`
  height: 3.5rem;
  width: 24rem;
  outline: none;
  border-radius: 0.5rem;
  border: white 2px solid;
  transition: border 0.5s;
  padding: 1rem;

  &:focus {
    border: tomato 2px solid;
  }
`;
