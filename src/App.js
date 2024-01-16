import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [boxLeft, setBoxLeft] = useState([
    { item: "1번째", left: "0%"},
    { item: "2번째", left: "0%"},
  ]);

  const handleClickBox = (idx) => {
    setBoxLeft((prevBoxLeft) => {
      const updatedBoxLeft = JSON.parse(JSON.stringify(prevBoxLeft));
  
      if (updatedBoxLeft[idx].left === "0%") {
        updatedBoxLeft[idx].left = '100%';
      } else {
        updatedBoxLeft[idx].left = '0%';
      }
      return updatedBoxLeft;
    });
  };

  return (
    <Contain>
      <LeftSide>
        {
          boxLeft.map((value, idx) => {
            return <LeftBox idx={idx + 1} box={value.left} onClick={() => handleClickBox(idx)} key={idx}>{value.item}</LeftBox>
          })
        }
        <CheckBoxWrap>                                                                                                          
          <CheckInput type="checkbox" id="check" name="check"/>
          <CheckLabel htmlFor="check">check</CheckLabel>
          <br />
          <CheckInput type="checkbox" id="check2" name="check2"/>
          <CheckLabel htmlFor="check2">check</CheckLabel>
        </CheckBoxWrap>
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
  width: 50%;
  height: 100vh;
  & div {
    height: 7vh;
    margin: 7%;
    cursor: pointer;
    position: relative;
    transition: left 2s, transform 2s;
  }
`;

const CheckBoxWrap = styled.section`
`;

const LeftBox = styled.div`
  left: ${(props) => {
    return props.box;
  }};
  background-color: rgb(2, 211, 248);
  clip-path: polygon(34% 0, 46% 9%, 100% 9%, 100% 78%, 0 78%, 0 28%, 0 0);
`;

const RightSide = styled.div`
  width: 50%;
  height: 100vh;
`;

const CheckInput = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: .5px solid #11264f;
  border-radius: 0.35rem;
  position: relative;
  padding: 1px;
  background: rgb(68, 84, 167);
  background: radial-gradient(circle, rgba(68, 84, 167, 1) 0%, rgba(174, 178, 227, 1) 100%);
  background-clip: content-box;

  &:checked {
    &::before {
      content: '\\2713';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 1rem;
    }
  }
`;

const CheckLabel = styled.label`
  position: relative;
  top: -10px;
  left: 3px;
  border-bottom: 1px solid gray;
`;

export default App;