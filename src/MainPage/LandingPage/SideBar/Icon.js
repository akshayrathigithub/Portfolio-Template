import React from "react";
import styled from 'styled-components'

const Icon = (props) => {
  return (
    <div>
      <div
        id="verti-border"
        style={{ display: "flex", flexDirection: "row" }}>
        <div id="dark"></div>
        <div id="white"></div>
      </div>
      <Div Size={props.Size} color={props.color}>
        <i className={props.icon}></i>
      </Div>

    </div>
  );
}
const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 57.8px;
    height: 50px;
    background-color: transparent;
    color: #fff;
    font-size: ${props => props.Size};
    cursor: pointer;
    transition: background-color 0.2s ease-in-out 0s ;
    &:hover{
      background-color: ${props => props.color};
    }
  `
export default Icon
