// import styled from "styled-components";

export const flexbox = ({ dir = "row", jc = "center", ai = "center" } = {}) => `
    display:flex;
    flex-direction:${dir};
    justify-content:${jc};
    align-items:${ai};
  `;

///---------
// const Box = styled.div`
//   background: skyblue;
//   ${flexbox()}
//   ${flexbox({ jc: "flex-start" })}
// `;
// const myJSX = (
//   <Box>
//     <h1>hello</h1>
//   </Box>
// );
