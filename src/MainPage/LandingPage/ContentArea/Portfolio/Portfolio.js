import React, { useState } from 'react'
import BorderSquare from '../../../Assets/BorderSquare'
import HeadingText from '../../../Assets/HeadingText'
import styled from 'styled-components'
import Pic_4 from '../../../Assets/bg4.jpg'

export default function Portfolio() {
    const [Active, SetActive] = useState("ALL")
    return (
        <div style={{
            border: '5px solid #3a4a5d',
            overflow: 'auto',
            overflowX: 'hidden',
            scrollbarColor:'blue'
        }}>
            <Section Pic={Pic_4} >
                <BorderSquare Text="PORTFOLIO" Icon="fas fa-laptop" Size="45px" />
                <Group_1>
                    <HeadingText Text="MY WORK" width={15} ConnectorLength={10} />
                    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Card>
                            <CardComp onClick={() => SetActive("ALL")}>
                                <CardTextWrapper Color={(Active === "ALL") ? "#1894ff" : "white"}>
                                    <p>ALL</p>
                                </CardTextWrapper>
                                <CardTextBorder Color={(Active === "ALL") ? "#1894ff" : "#ffffff00"} />
                            </CardComp>
                            <CardComp onClick={() => SetActive("FRONTEND")}>
                                <CardTextWrapper Color={(Active === "FRONTEND") ? "#1894ff" : "white"}>
                                    <p>FRONT END</p>
                                </CardTextWrapper>
                                <CardTextBorder Color={(Active === "FRONTEND") ? "#1894ff" : "#ffffff00"} />
                            </CardComp>
                            <CardComp onClick={() => SetActive("BACKEND")}>
                                <CardTextWrapper Color={(Active === "BACKEND") ? "#1894ff" : "white"}>
                                    <p>BACKEND</p>
                                </CardTextWrapper>
                                <CardTextBorder Color={(Active === "BACKEND") ? "#1894ff" : "#ffffff00"} />
                            </CardComp>
                            <CardComp onClick={() => SetActive("DESIGN")}>
                                <CardTextWrapper Color={(Active === "DESIGN") ? "#1894ff" : "white"}>
                                    <p>GRAPHIC DESIGN</p>
                                </CardTextWrapper>
                                <CardTextBorder Color={(Active === "DESIGN") ? "#1894ff" : "#ffffff00"} />
                            </CardComp>
                        </Card>
                    </div>
                    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {
                            (Active === "ALL") ?
                                (
                                    <ProjectGrid Rows=" 20rem 20rem" Columns="25rem 25rem 25rem" >
                                        <Project color="green">
                                            <div className="FrontFace"></div>
                                            <div className="BackFace">Akshay Rathi</div>
                                        </Project>
                                        <Project color="red">
                                            <div className="FrontFace"></div>
                                            <div className="BackFace"></div>
                                        </Project>
                                        <Project color="yellow">
                                            <div className="FrontFace"></div>
                                            <div className="BackFace"></div>
                                        </Project>
                                        <Project color="blue">
                                            <div className="FrontFace"></div>
                                            <div className="BackFace"></div>
                                        </Project>
                                        <Project color="gold">
                                            <div className="FrontFace"></div>
                                            <div className="BackFace"></div>
                                        </Project>
                                        <Project color="pink">
                                            <div className="FrontFace"></div>
                                            <div className="BackFace"></div>
                                        </Project>
                                    </ProjectGrid>
                                ) :
                                (
                                    (Active === "FRONTEND") ?
                                        (
                                            <ProjectGrid Rows=" 20rem" Columns="25rem 25rem">
                                                <Project color="green">
                                                    <div className="FrontFace"></div>
                                                    <div className="BackFace"></div>
                                                </Project>
                                                <Project color="red">
                                                    <div className="FrontFace"></div>
                                                    <div className="BackFace"></div>
                                                </Project>
                                            </ProjectGrid>
                                        ) :
                                        (
                                            (Active === "BACKEND") ?
                                                (
                                                    <ProjectGrid Rows=" 20rem" Columns="25rem 25rem">
                                                        <Project color="yellow">
                                                            <div className="FrontFace"></div>
                                                            <div className="BackFace"></div>
                                                        </Project>
                                                        <Project color="blue">
                                                            <div className="FrontFace"></div>
                                                            <div className="BackFace"></div>
                                                        </Project>
                                                    </ProjectGrid>
                                                ) :
                                                (
                                                    <ProjectGrid Rows=" 20rem" Columns="25rem 25rem">
                                                        <Project color="gold">
                                                            <div className="FrontFace"></div>
                                                            <div className="BackFace"></div>
                                                        </Project>
                                                        <Project color="pink">
                                                            <div className="FrontFace"></div>
                                                            <div className="BackFace"></div>
                                                        </Project>
                                                    </ProjectGrid>
                                                )
                                        )
                                )
                        }
                    </div>
                </Group_1>
            </Section>
        </div >
    )
}
const Section = styled.div` 
  background-size: cover;
  background-attachment: fixed;
  width: 94rem;
  height: 95vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${props => props.Pic});
`
const Group_1 = styled.div` 
  width: 100%;
  height: auto;
  background-color: #2c3e50;
`
const Card = styled.div` 
    width: 40rem;
    height: 4rem;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background-color: #2c3e50;
    box-shadow: 0 0 25px 1px #1b2838;
    margin: 2rem 0rem 3rem 0rem;
`
const CardComp = styled.div` 
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const CardTextWrapper = styled.div` 
    font-size: 13px;
    color: ${ props => props.Color};
    font-weight: 500;
    &:hover{
        color: #1894ff;
    }
`
const CardTextBorder = styled.div` 
    width: 5rem; 
    height: 0.4rem;
    background-color: ${ props => props.Color};
    position: absolute;
    bottom: 0%;
`
const ProjectGrid = styled.div` 
    display: grid;
    grid-template-columns:  ${props => props.Columns};
    gap: 2rem;
    grid-template-rows: ${props => props.Rows};
    margin-bottom: 2rem;
`
const Project = styled.div` 
    background-color: ${ props => props.color} ;
	width: 100%;
	height: 100%;
    position: relative;
    
    .FrontFace{
        position: absolute;
        width: 3rem;
        height: 3rem;
        top: 75%;
        left: 80%;
        transform: rotateY(0deg) rotate(45deg);
        backface-visibility: hidden;
        background-color: yellowgreen;
        transform-style: preserve-3d;
        transition: all 0.8s ease-in-out ;
    }
    .BackFace{
        position: absolute;
        width: 3rem;
        height: 3rem;
        top: 75%;
        left: 80%;
        backface-visibility: hidden;
        transform: rotateY(180deg) rotate(45deg);
        background-color: rebeccapurple;
        transform-style: preserve-3d;
        transition: all 0.8s ease-in-out;
    }
    &:hover .FrontFace{
        width: 100%;
        height: 100%;
        top: 0%;
        left: 0%;
        transform: rotateY(180deg);
    }
    &:hover .BackFace{
        width: 100%;
        height: 100%;
        top: 0%;
        left: 0%;
        transform: rotateY(0deg);
    }
`