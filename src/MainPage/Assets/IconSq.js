import React, { useState } from 'react'
import styled from 'styled-components'

export default function IconSq(props) {
  const [Color, SetColor] = useState(false)
  return (
    <BorderSquare>
      <div style={{ width: '75%', height: '15rem' }} onMouseEnter={() => SetColor(!Color)} onMouseLeave={() => SetColor(!Color)} >
        <Head color={Color ? '#2c3e50' : 'transparent'} >
          <BigSquare>
            <BorderOne color={Color ? '#1894ff' : '#2c3e50'} />
            <Square color={Color ? '#1894ff' : '#2c3e50'}>
              <div style={{ transform: 'rotate(-135deg)', color: 'white', fontSize: props.Size }}><i className={props.Icon}></i> </div>
            </Square>
            <BorderTwo color={Color ? '#1894ff' : '#2c3e50'} />
          </BigSquare>
          <Text>
            <Heading>{props.Head}</Heading>
            <Description visible={Color ? 'initial' : 'none'}>{props.Text} </Description>
          </Text>
        </Head>
      </div>
    </BorderSquare>
  )
}
const Square = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: ${props => props.color};
  text-align: center;
  `

const BorderOne = styled.div`
  height: 80px;
  width: 4px;
  margin-right: 7px;
  background-color: ${props => props.color};`

const BorderTwo = styled.div`
  height: 80px;
  width: 4px;
  margin-left: 7px;
  background-color: ${props => props.color};
  `

const Head = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color:${ props => props.color};
width: 110%;
height: 12rem;
`
const BigSquare = styled.div`
  display: flex;
  flex-direction: row;
  width: 9rem;
  height: 8rem;
  justify-content: center;
  margin-top: -4rem;
  align-items: center;
  transform: rotate(135deg);
`
const BorderSquare = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 27rem;
  position: relative;
`
const Text = styled.div`
text-align: center;
`
const Heading = styled.p`
font-size: 16px;
letter-spacing: 0.7px;
margin: 20px 0 13px;
font-weight: 600;
color: white;
`
const Description = styled.p`
display: ${ props => props.visible} ;
margin-bottom: 0;
font-size: 14px;
letter-spacing: 0.7px;
line-height: 24px;
font-weight: 300;
color: white;
padding: 10px
`