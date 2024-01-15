import React, { useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [boxLeft, setBoxLeft] = useState([
    { item: "첫번째", left: "0%"},
    { item: "두번째", left: "0%"},
  ]);

  const handleClickBox = (idx) => {
    setBoxLeft(prevBoxLeft => {
      const updatedBoxLeft = [...prevBoxLeft];
      if (updatedBoxLeft[idx].left === "100%") {
        console.log(idx, boxLeft);
        console.log("==================");
        updatedBoxLeft[idx].left = '0%';
      }
      if (updatedBoxLeft[idx].left === "0%") {
        updatedBoxLeft[idx].left = '100%';
      }
      return updatedBoxLeft;
    });
  } 
  

  return (
    <Contain>
      <LeftSide>
        {
          boxLeft.map((value, idx) => {
            return <LeftBox box={value.left} onClick={() => handleClickBox(idx)} key={idx}>{value.item}</LeftBox>
          })
        }
      </LeftSide>
      <RightSide>
      </RightSide>
    </Contain>
  );
};

const Contain = styled.div`
  display: flex;
`;

const LeftSide = styled.div`
  background-color: ivory;
  width: 50%;
  height: 100vh;
  & div {
    border: 1px solid black;
    height: 7vh;
    margin: 1%;
    cursor: pointer;
    position: relative;
    transition: left 2s, transform 2s;
  }
`;

const LeftBox = styled.div`
  left: ${(props) => {
    console.log(props);
    return props.box;
  }};
`;

const RightSide = styled.div`
  background-color: skyblue;
  width: 50%;
  height: 100vh;
`;

export default App;
