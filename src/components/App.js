import React, { useState, useEffect} from "react";
import List from "./List";
import Filter from "./Filter";
import Profile from "./Profile";
import styled from "styled-components";


export default function App() {
  const data_url = "https://api.npoint.io/86690d80ff3d455133f0";

  const [robots_list, setRobotsList] = useState([])
  const [profile_data, setProfileDate] = useState({})
  const [is_loading, setIsLoading] = useState(true)
  const [error_msg, setErrorMsg] = useState("")
  
  
  useEffect(() => {
    
    (async () => {

      try {
        const response = await fetch(data_url);
        if (!response.ok) throw new Error("Network response was not ok.");
        const data = await response.json();
  
        data.forEach((robot) => (robot.show = true));

        setRobotsList(data)
        setProfileDate(data[0])
        setIsLoading(false)
  
      } catch (error) {
        setErrorMsg("Something went wrong")
      }
      
    })()


  }, [])

  useEffect(() => {
    console.log({robots_list})
  } , [robots_list])
  



  const update_list_state = (list) => {
    setRobotsList(list);
  };

  const update_profile = (item) => {
    setProfileDate(item)
  };


    if (error_msg) return <h1>{error_msg}</h1>;
    return (
      <Box>
        {is_loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <Filter
              list_data={robots_list}
              on_filter={update_list_state}
            />
            <ContentBox>
              <Profile {...profile_data} />
              <List list_data={robots_list} pick={update_profile} />
            </ContentBox>
          </>
        )}
      </Box>
    );
}


const ContentBox = styled.div`
  /*border:red solid 2px;*/
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
