import React from 'react'
import styled from 'styled-components'

export default function Carousel(props) {
    return (
        <CarouseL size = {props.Size} opacity={props.Blurr}>
            <Top>
                <div style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'solid #2c3e50 5px', borderBottomColor: `${props.BorderColor}`, width: '110px', borderRadius: '50%', marginTop: '-3rem',
                    height: '110px', boxShadow: '0 0 25px 1px #1b2838'
                }}>
                    <Img img={ props.Pic } />
                </div>
                <div style={{ margin: '10px 0px' }}><Name>{props.Name}</Name></div>
                <div><Description>{props.Descrip}</Description></div>
            </Top>
            <Body>
                <Comment>
                    <CommentBubble color="#1894ff" borderColor= "#ffffff00"><p style={{ marginTop: '22px', fontSize: '45px', color: 'white' }} >“</p></CommentBubble>
                    <BubbleConnector />
                    <CommentBubble color= {undefined} borderColor= "#1894ff"><p style={{ marginTop: '22px', fontSize: '45px', color: 'white' }} >”</p></CommentBubble>
                </Comment>
                <CommentText>
                    <p style={{
                        fontSize: '13px', color: 'white', fontWeight: '100', lineHeight: '24px',
                        letterSpacing: '0.7px', fontFamily: "'Montserrat', sans-serif",
                    }} >{props.Comment}</p>
                </CommentText>
            </Body>

        </CarouseL>
    )
}
const CarouseL = styled.div`
width: 466px;
height: 20rem;
transform: scale(${props => props.size});
opacity: ${props => props.opacity};
background-color: #2c3e50;
box-shadow: 0 0 25px 1px #1b2838; 
margin-left: 1rem;
`
const Top = styled.div` 
width: 100%;
height: 5rem;
display: flex;
flex-direction: column;
align-items: center;
`
const Img = styled.div` 
background-image: url(${props => props.img});
width: 100px;
height: 100px;
border-radius: 50%;
background-size: cover;
`
const Name = styled.p` 
font-size: 18px;
font-weight: 600;
line-height: 1;
color: white;
`
const Description = styled.p` 
border-bottom: 1px solid #3a4a5d;
font-size: 13px;
color: white;
font-weight: 100;
`
const Body = styled.div` 
height: 15rem;
width: 100%;
display: flex;
flex-direction: row;
padding: 5px 5px 5px 10px;
`
const Comment = styled.div` 
width: 4rem;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const CommentBubble = styled.div` 
width: 40px;
height: 40px;
background-color: ${props => props.color};
border: solid ${props => props.borderColor} 2px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
`
const BubbleConnector = styled.div` 
height: 7rem;
width: 2px;
background-color: #1894ff;
`
const CommentText = styled.div` 
width: 100%;
height: 100%;
padding: 3.5rem 1rem 0rem 0.5rem;
`