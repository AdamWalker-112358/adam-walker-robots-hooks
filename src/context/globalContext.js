import React, { createContext, useState, useEffect } from 'react';




export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {

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



  const update_list_state = (list) => {
    setRobotsList(list);
  };

  const update_profile = (item) => {
    setProfileDate(item)
  };

    const state = {
        robots_list,
        profile_data,
        is_loading,
        error_msg,
    }

    const actions = {
        update_list_state,
        update_profile
    }
    return (
        <GlobalContext.Provider value={{...state, ...actions}}>
            {children}
        </GlobalContext.Provider>
    )
}


