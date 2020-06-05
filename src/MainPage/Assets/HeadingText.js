import React from 'react'
import styled from 'styled-components'

export default function HeadingText(props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextDiv Width={props.width}> <Text> {props.Text} </Text> </TextDiv>
            <Fig>
                <Sq_Border> <Sq /> </Sq_Border>
                <Connector Length = {props.ConnectorLength} > <ConnectorLine Length = {props.ConnectorLength} /> </Connector>
                <Sq_Border> <Sq /> </Sq_Border>
            </Fig>
        </div>
    )
}
const Sq_Border = styled.div` 
width: 1.4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Sq = styled.div` 
 width: 1rem;
  height: 1rem;
  border: solid 2px white;
  transform: rotate(45deg);
`
const Connector = styled.div` 
  width: ${props => props.Length}rem;
  height: 4rem;
  display: flex;
  align-items: center;
`
const ConnectorLine = styled.div` 
    width: ${props => props.Length}rem;
    height: 2px;
    background-color: white;
`
const TextDiv = styled.div` 
  width: ${props => props.Width}rem;
  height: 4rem;
  text-align: center;
  margin-top: 3rem;
  padding-top: 3.5rem;
`
const Text = styled.p` 
font-size: 25px;
  display: inline-block;
  font-weight: bold;
  letter-spacing: 0.7px;
  color: white;
`
const Fig = styled.div` 
display: flex;
  flex-direction: row;
  width: 15rem;
  height: 4rem;
  justify-content: center;
`