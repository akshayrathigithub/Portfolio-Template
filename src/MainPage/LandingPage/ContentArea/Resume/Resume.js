import React, { useState, useRef } from 'react'
import BorderSquare from '../../../Assets/BorderSquare'
import HeadingText from '../../../Assets/HeadingText'
import styled from 'styled-components'
import Pic from '../../../Assets/skills.jpg'
import Pic_1 from '../../../Assets/bg1.jpg'

export default function Resume() {
    const [stat, setstat] = useState({ Html: 0, Css: 0, JS: 0, React: 0 })
    const [Flag, setFlag] = useState(false)
    const UsrRef = useRef()
    const DivScroll = () => {
        const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
        const ScrollTop = UsrRef.current.scrollTop
        console.log(ScrollTop)
        if (ScrollTop >= 1300 && !Flag) {
            setFlag(true)
        }
    }

    const Disp = () => {
        let flag = true
        let Stat = stat
        if (Stat.Html < 95) {
            Stat.Html = Stat.Html + 3
            flag = false
        }
        if (Stat.Css < 93) {
            Stat.Css = Stat.Css + 3
            flag = false
        }
        if (Stat.JS < 90) {
            Stat.JS = Stat.JS + 3
            flag = false
        }
        if (Stat.React < 90) {
            Stat.React = Stat.React + 3
            flag = false
        }
        if (flag) {
            console.log("end")
        } else {
            setstat({ ...Stat })
        }
    }
    if (Flag) {
        setTimeout(Disp, 40)
    }
    return (
        <div onScroll={DivScroll} ref={UsrRef} style={{
            border: '5px solid #3a4a5d',
            overflow: 'auto',
            overflowX: 'hidden'
        }}>
            {console.log(Flag)}
            <Section Pic={Pic_1} >
                <BorderSquare Text="RESUME" Icon="fas fa-leaf" Size="45px" />
                <Group_1>
                    <HeadingText Text="MY EXPERIENCE" width={16} ConnectorLength={18} />
                    <Grid>
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1rem' }}>
                                <div style={{ color: '#1894ff' }}><i className="fas fa-laptop"></i></div>
                                <div style={{
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    letterSpacing: '0.7px', margin: '0px 0px 0px 15px',
                                    color: 'white'
                                }}>EDUCATION</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <LineWrapper>
                                    <Square Top={9.1} />
                                    <Square Top={56.6} />
                                    <PathLine />
                                </LineWrapper>
                                <div>
                                    <div style={{ marginTop: '3rem' }}>
                                        <Year> 1990-1994</Year>
                                        <Descrip>
                                            <Header>
                                                <Heading>Harvard University</Heading>
                                                <SubHeading>B.A. and M.S., Computer Science</SubHeading>
                                                <Border />
                                            </Header>
                                            <TextDes>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas voluptates. Excepturi fugiat nobis reprehenderit sequi veniam! </TextDes>
                                        </Descrip>
                                    </div>
                                    <div style={{ marginTop: '3rem' }}>
                                        <Year> 1990-1994</Year>
                                        <Descrip>
                                            <Header>
                                                <Heading>Harvard University</Heading>
                                                <SubHeading>B.A. and M.S., Computer Science</SubHeading>
                                                <Border />
                                            </Header>
                                            <TextDes>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas voluptates. Excepturi fugiat nobis reprehenderit sequi veniam! </TextDes>
                                        </Descrip>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1rem' }}>
                            <div style={{ color: '#1894ff' }}><i className="fas fa-laptop"></i></div>
                                <div style={{
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    letterSpacing: '0.7px', margin: '0px 0px 0px 15px',
                                    color: 'white'
                                }}>EDUCATION</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <LineWrapper>
                                    <Square Top={9.1} />
                                    <Square Top={56.6} />
                                    <PathLine />
                                </LineWrapper>
                                <div>
                                    <div style={{ marginTop: '3rem' }}>
                                        <Year> 1990-1994</Year>
                                        <Descrip>
                                            <Header>
                                                <Heading>Harvard University</Heading>
                                                <SubHeading>B.A. and M.S., Computer Science</SubHeading>
                                                <Border />
                                            </Header>
                                            <TextDes>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas voluptates. Excepturi fugiat nobis reprehenderit sequi veniam! </TextDes>
                                        </Descrip>
                                    </div>
                                    <div style={{ marginTop: '3rem' }}>
                                        <Year> 1990-1994</Year>
                                        <Descrip>
                                            <Header>
                                                <Heading>Harvard University</Heading>
                                                <SubHeading>B.A. and M.S., Computer Science</SubHeading>
                                                <Border />
                                            </Header>
                                            <TextDes>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi earum eligendi ipsum, laborum maiores mollitia, optio quam quis rerum totam voluptas voluptates. Excepturi fugiat nobis reprehenderit sequi veniam! </TextDes>
                                        </Descrip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <ResumeDiv>
                        <ResBtn>Take My Resume</ResBtn>
                    </ResumeDiv>
                    <Skills>
                        <HeadingText Text="SOFT SKILLS" width={14} ConnectorLength={14} />
                        <CircleGrid>
                            <CircleWrapper data-value="0.8" data-color="#1894ff">
                                <svg viewBox="0 0 100 100" style={{ display: 'inline-block', width: '10rem', marginTop: '15px' }}>
                                    <path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#3a4a5d" strokeWidth="5" fillOpacity="0">
                                    </path>
                                    <Path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#1894ff" strokeWidth="5" fillOpacity="0">
                                    </Path>
                                </svg>
                                <p style={{ marginTop: '15px', color: '#fff' }}>Communication</p>
                            </CircleWrapper>
                            <CircleWrapper data-value="0.8" data-color="#1894ff">
                                <svg viewBox="0 0 100 100" style={{ display: 'inline-block', width: '10rem', marginTop: '15px' }}>
                                    <path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#3a4a5d" strokeWidth="5" fillOpacity="0">
                                    </path>
                                    <Path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#1894ff" strokeWidth="5" fillOpacity="0">
                                    </Path>
                                </svg>
                                <p style={{ marginTop: '15px', color: '#fff' }}>Team Work</p>
                            </CircleWrapper>
                            <CircleWrapper data-value="0.8" data-color="#1894ff">
                                <svg viewBox="0 0 100 100" style={{ display: 'block', width: '10rem', marginTop: '15px' }}>
                                    <path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#3a4a5d" strokeWidth="5" fillOpacity="0">
                                    </path>
                                    <Path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#1894ff" strokeWidth="5" fillOpacity="0">
                                    </Path>
                                </svg>
                                <p style={{ marginTop: '15px', color: '#fff' }}>Speed</p>
                            </CircleWrapper>
                            <CircleWrapper data-value="0.8" data-color="#1894ff">
                                <svg viewBox="0 0 100 100" style={{ display: 'block', width: '10rem', marginTop: '15px' }}>
                                    <path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#3a4a5d" strokeWidth="5" fillOpacity="0">
                                    </path>
                                    <Path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#1894ff" strokeWidth="5" fillOpacity="0">
                                    </Path>
                                </svg>
                                <p style={{ marginTop: '15px', color: '#fff' }}>Creativity</p>
                            </CircleWrapper>
                        </CircleGrid>
                        <HeadingText Text="TECHNICAL SKILLS" width={18} ConnectorLength={18} />
                        <div style={{ display: 'grid', gridTemplateRows: '5rem 5rem', gridTemplateColumns: '1fr 1fr', padding: '1rem', rowGap: '3rem' }}>
                            <div style={{ position: 'relative' }}>
                                <ProgressDisp Anim={Flag ? "news" : ""}>{stat.Html}</ProgressDisp>
                                <Progress>
                                    <ProgressValue Anim={Flag ? "load" : ""}></ProgressValue>
                                </Progress>
                                <div style={{ color: '#fff', marginTop: '1rem', marginLeft: '1rem' }}>
                                    <p>JavaScript</p>
                                </div>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <ProgressDisp Anim={Flag ? "news" : ""}>{stat.Css}</ProgressDisp>
                                <Progress>
                                    <ProgressValue Anim={Flag ? "load" : ""}></ProgressValue>
                                </Progress>
                                <div style={{ color: '#fff', marginTop: '1rem', marginLeft: '1rem' }}>
                                    <p>Html</p>
                                </div>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <ProgressDisp Anim={Flag ? "news" : ""}>{stat.JS}</ProgressDisp>
                                <Progress>
                                    <ProgressValue Anim={Flag ? "load" : ""}></ProgressValue>
                                </Progress>
                                <div style={{ color: '#fff', marginTop: '1rem', marginLeft: '1rem' }}>
                                    <p>CSS</p>
                                </div>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <ProgressDisp Anim={Flag ? "news" : ""}>{stat.React}</ProgressDisp>
                                <Progress>
                                    <ProgressValue Anim={Flag ? "load" : ""}></ProgressValue>
                                </Progress>
                                <div style={{ color: '#fff', marginTop: '1rem', marginLeft: '1rem' }}>
                                    <p>React</p>
                                </div>
                            </div>
                        </div>
                    </Skills>
                </Group_1>
            </Section>
        </div>
    )
}
const Section = styled.div` 
  background-size: cover;
  background-attachment: fixed;
  width: 80vw;
  height: 95vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${props => props.Pic});
`
const Group_1 = styled.div` 
  width: 100%;
  height: auto;
  background-color: #2c3e50;
  padding-bottom: 1rem;
`
const Grid = styled.div` 
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: auto;
margin: 2rem 60px;
gap: 35px;
`
const LineWrapper = styled.div` 
position: relative;
display: flex;
justify-content: center;
width: 2rem;
height: auto;
`
const PathLine = styled.div` 
width: 11px;
height: 650px;
background-color: #2c3e50;
border-radius: 5px;
border: 3px solid #3a4a5d;
box-shadow: 0 0 15px 0px #1b2838;
`
const Square = styled.div` 
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #2c3e50;
    border: 3px solid #1894ff;
    transform: rotate(45deg);
    top: ${props => props.Top}%;`

const Year = styled.div` 
    width: 6.6rem;
    height: 2.1rem;
    margin: 0rem 12px;
    background-color: #2c3e50;
    border-radius: 5px;
    border: 3px solid #3a4a5d;
    box-shadow: 0 0 15px 0px #1b2838;
    color: #FFF;
    padding: 8px 0;
    text-align: center;
    line-height: 1;
    margin-bottom: 10px;
    font-size: 13px;
    letter-spacing: 0.4px;
`
const Descrip = styled.div` 
    width: 100%;
    height: auto;
    margin: 0rem 12px;
    background-color: #2c3e50;
    border-radius: 5px;
    padding: 25px 20px 20px 20px;
    border: 3px solid #3a4a5d;
    box-shadow: 0 0 15px 0px #1b2838;
`
const Header = styled.div` 
    width: 100%;
    height: 5rem;
`
const Heading = styled.p` 
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #1894ff;
`
const SubHeading = styled.p` 
font-size: 13px;
font-weight: 400;
color: #869cb1;
`
const Border = styled.div` 
width: 100%;
height: 2px;
background-color: #3a4a5d;
margin-top: 1.5rem;
`
const TextDes = styled.p` 
font-weight: 400;
font-size: 13px;
line-height: 24px;
color: #BBB;
margin: 15px 0px 0px 0px;
`
const ResumeDiv = styled.div` 
width: 100%;
height: 4rem;
display: flex;
justify-content: center;
align-items: center;
margin: 4.5rem 0rem;
`
const ResBtn = styled.div` 
position: relative;
width: 175px;
height: 40px;
justify-content: center;
background: transparent;
display: flex;
align-items: center;
box-shadow: 0 0 15px 0px #1b2838;
color: #fff;
z-index: 1;
cursor: pointer;

&::before{
    content: '';
    width: 0%;
    height: 40px;
    position: absolute;
    background: #1894ff;
    top: 0%;
    left: 0;
    z-index: -1;
    transition: width 0.3s;
}
&:hover::before{
    width: 100%;
}
`
const Skills = styled.div` 
width: 100%;
height: 50rem;
position: relative;
background-size: cover;
background-attachment: fixed;
background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${Pic});
`
const Progress = styled.div` 
background: #39495b;
display: flex;
  border-radius: 100px;
  align-items: center;
  position: relative;
  margin-top: 2rem;
  margin-left: 1rem;
  padding: 0 5px;
  height: 8px;
  width: 600px;
`
const ProgressValue = styled.div` 
  animation: ${props => props.Anim} 3s normal forwards;
  border-radius: 100px;
  background: #1894ff;
  height: 8px;
  width: 0;

  @keyframes load {
  0% { width: 0; }
  100% { width: 99%; }
}
`
const ProgressDisp = styled.div` 
width: 35px;
height: 20px;
background-color: #1894ff;
position: absolute;
border-radius: 4px;
left: 1%;
animation: ${props => props.Anim} 3s normal forwards;
&::before{
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 15px;
    left: 8px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 13px solid #1894ff;
}
@keyframes news {
  0% { left: 1%; }
  100% { left: 78%; }
}
`
const CircleGrid = styled.div` 
    display: grid;
    width: 100%;
    grid-template-rows: 12rem;
    grid-template-columns: 25% 25% 25% 25%;
`
const CircleWrapper = styled.div` 
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    height: 100%;
    text-align: center;
`

const Path = styled.path` 
    animation: Darker 3s linear 2s forwards;
	stroke-dasharray: 59px, 298.493px;
    stroke-dashoffset: 59.6986px;

    @keyframes Darker{
	0% { stroke-dasharray: 59px, 298.493px;}
	100% { stroke-dasharray: 298.493px, 298.493px;}
}
`