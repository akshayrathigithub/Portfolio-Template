import React, { useState } from 'react'
import styled from 'styled-components'

export default function BorderSquare(props) {
    const [Color, SetColor] = useState(false)
    return (
        <SquareWarpper>
            <Container>
                <BorderOne color = {Color ? '#1894ff' : '#2c3e50'} />
                <Square onMouseEnter={ () => SetColor(!Color) } onMouseLeave={ () => SetColor(!Color) } color = {Color ? '#1894ff' : '#2c3e50'}>
                <div style={{ transform: 'rotate(-135deg)', color: 'white', fontSize: props.Size }}><i className={props.Icon}></i> </div> 
                </Square>
                <BorderTwo color = {Color ? '#1894ff' : '#2c3e50'} />
            </Container>
            <Text>
            <p>{props.Text}</p>
            </Text>
        </SquareWarpper>
    )
}
const SquareWarpper = styled.div ` 
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 27rem;
`
const Container = styled.div ` 
  display: flex;
  flex-direction: row;
  width: 15rem;
  height: 15rem;
  justify-content: center;
  align-items: center;
  transform: rotate(135deg);
`
const Square = styled.div`
  width: 120px;
  height: 120px;
  background-color: ${props => props.color};
  text-align: center;
  padding: 30px 0px;`

    const BorderOne = styled.div`
    height: 120px;
  width: 4px;
  margin-right: 7px;
  background-color: ${props => props.color};`

    const BorderTwo = styled.div`
    height: 120px;
  width: 4px;
  margin-left: 7px;
  background-color: ${props => props.color};`
  const Text = styled.div ` 
    color: white;
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: 1px;
  `