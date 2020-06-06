import React from 'react'
import BorderSquare from '../../../Assets/BorderSquare'
import HeadingText from '../../../Assets/HeadingText'
import styled from 'styled-components'
import Pic_1 from '../../../Assets/bg1.jpg'

export default function Blog() {
    return (
        <div style={{
            border: '5px solid #3a4a5d',
            overflow: 'auto',
            overflowX: 'hidden'
        }}>
            <Section Pic={Pic_1} >
                <BorderSquare Text="BLOG" Icon="fab fa-blogger-b" Size="45px" />
                <Group_1>
                    <HeadingText Text="LAST POSTS" width={12} ConnectorLength={12} />
                    <Grid >
                        <PostOne height= {720} IconOne= {11} IconTwo= {18} IconThree= {25} grid="1/1/3/2" >
                            <PicSec Pic={Pic_1}>
                                <div id="ShareDiv">
                                    <div id="ShareWrapper">
                                        <div id="Share"><i className="fas fa-share-alt"></i></div>
                                    </div>
                                    <div className="IconWrapper">
                                        <div className="Icon Icon-1"><i className="fab fa-twitter"></i></div>
                                        <div className="Icon Icon-2"><i className="fab fa-whatsapp"></i></div>
                                        <div className="Icon Icon-3"><i className="fab fa-facebook-f"></i></div>
                                    </div>
                                </div>
                                <div id="PostOneText">
                                    <div className="Text Text-1">Creative</div>
                                    <div className="Text Text-2">FrontEnd</div>
                                    <div className="Text Text-3">WebEnd</div>
                                </div>
                            </PicSec>

                            <DescripSec Height={30}>
                                <Header>
                                    <Title>Normal Post Style</Title>
                                    <SubTitle>Posted 6 Dec </SubTitle>
                                </Header>
                                <Border>
                                    <div style={{
                                        width: '95%', height: '2px', backgroundColor: '#3a4a5d'
                                    }}></div>
                                </Border>
                                <Description>
                                    <TexT>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur distinctio dolorum ea facilis non repellendus velit voluptas voluptates? Accusantium at doloribus eum iste iusto, nam rem repudiandae voluptates. Inventore.
                                </TexT>
                                    <End>
                                        <Read>READ MORE</Read>
                                        <Comment>2 Comment</Comment>
                                    </End>
                                </Description>
                            </DescripSec>
                            <FootSec Height={7}>
                                <Eclipse Width={3.5} ><div>CSS</div></Eclipse>
                                <Eclipse Width={4.5} ><div>HTML</div></Eclipse>
                                <Eclipse Width={7} ><div>WORDPRESS</div></Eclipse>
                            </FootSec>
                        </PostOne>
                        <PostOne height={290} IconOne={25} IconTwo={42} IconThree={59} grid="3/1/4/2" >
                            <div id="ShareDiv">
                                    <div id="ShareWrapper">
                                        <div id="Share"><i className="fas fa-share-alt"></i></div>
                                    </div>
                                    <div className="IconWrapper">
                                        <div className="Icon Icon-1"><i className="fab fa-twitter"></i></div>
                                        <div className="Icon Icon-2"><i className="fab fa-whatsapp"></i></div>
                                        <div className="Icon Icon-3"><i className="fab fa-facebook-f"></i></div>
                                    </div>
                                </div>
                            <DescripSec Height={75}>
                                <Header>
                                    <Title>Normal Post Style</Title>
                                    <SubTitle>Posted 6 Dec </SubTitle>
                                </Header>
                                <Border>
                                    <div style={{
                                        width: '95%',
                                        height: '2px',
                                        backgroundColor: '#3a4a5d'
                                    }}></div>
                                </Border>
                                <Description>
                                    <TexT>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur distinctio dolorum ea facilis non repellendus velit voluptas voluptates? Accusantium at doloribus eum iste iusto, nam rem repudiandae voluptates. Inventore.
                                </TexT>
                                    <End>
                                        <Read>READ MORE</Read>
                                        <Comment>2 Comment</Comment>
                                    </End>
                                </Description>
                            </DescripSec>
                            <FootSec Height={18}>
                                <Eclipse Width={3.5} ><div>CSS</div></Eclipse>
                                <Eclipse Width={4.5} ><div>HTML</div></Eclipse>
                                <Eclipse Width={7} ><div>WORDPRESS</div></Eclipse>
                            </FootSec>
                        </PostOne>
                        <PostOne height= {720} IconOne= {11} IconTwo= {18} IconThree= {25} grid="4/1/5/2" >
                            <PicSec Pic={Pic_1}>
                                <div id="ShareDiv">
                                    <div id="ShareWrapper">
                                        <div id="Share"><i className="fas fa-share-alt"></i></div>
                                    </div>
                                    <div className="IconWrapper">
                                        <div className="Icon Icon-1"><i className="fab fa-twitter"></i></div>
                                        <div className="Icon Icon-2"><i className="fab fa-whatsapp"></i></div>
                                        <div className="Icon Icon-3"><i className="fab fa-facebook-f"></i></div>
                                    </div>
                                </div>
                                <div id="PostOneText">
                                    <div className="Text Text-1">Creative</div>
                                    <div className="Text Text-2">FrontEnd</div>
                                    <div className="Text Text-3">WebEnd</div>
                                </div>
                            </PicSec>

                            <DescripSec Height={30}>
                                <Header>
                                    <Title>Normal Post Style</Title>
                                    <SubTitle>Posted 6 Dec </SubTitle>
                                </Header>
                                <Border>
                                    <div style={{
                                        width: '95%', height: '2px', backgroundColor: '#3a4a5d'
                                    }}></div>
                                </Border>
                                <Description>
                                    <TexT>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur distinctio dolorum ea facilis non repellendus velit voluptas voluptates? Accusantium at doloribus eum iste iusto, nam rem repudiandae voluptates. Inventore.
                                </TexT>
                                    <End>
                                        <Read>READ MORE</Read>
                                        <Comment>2 Comment</Comment>
                                    </End>
                                </Description>
                            </DescripSec>
                            <FootSec Height={7}>
                                <Eclipse Width={3.5} ><div>CSS</div></Eclipse>
                                <Eclipse Width={4.5} ><div>HTML</div></Eclipse>
                                <Eclipse Width={7} ><div>WORDPRESS</div></Eclipse>
                            </FootSec>
                        </PostOne>
                        
                        <PostOne height= {290} IconOne= {25} IconTwo= {42} IconThree= {59} grid="1/2/2/3" >
                            <div id="ShareDiv">
                                    <div id="ShareWrapper">
                                        <div id="Share"><i className="fas fa-share-alt"></i></div>
                                    </div>
                                    <div className="IconWrapper">
                                        <div className="Icon Icon-1"><i className="fab fa-twitter"></i></div>
                                        <div className="Icon Icon-2"><i className="fab fa-whatsapp"></i></div>
                                        <div className="Icon Icon-3"><i className="fab fa-facebook-f"></i></div>
                                    </div>
                                </div>
                            <DescripSec Height={75}>
                                <Header>
                                    <Title>Normal Post Style</Title>
                                    <SubTitle>Posted 6 Dec </SubTitle>
                                </Header>
                                <Border>
                                    <div style={{
                                        width: '95%',
                                        height: '2px',
                                        backgroundColor: '#3a4a5d'
                                    }}></div>
                                </Border>
                                <Description>
                                    <TexT>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur distinctio dolorum ea facilis non repellendus velit voluptas voluptates? Accusantium at doloribus eum iste iusto, nam rem repudiandae voluptates. Inventore.
                                </TexT>
                                    <End>
                                        <Read>READ MORE</Read>
                                        <Comment>2 Comment</Comment>
                                    </End>
                                </Description>
                            </DescripSec>
                            <FootSec Height={18}>
                                <Eclipse Width={3.5} ><div>CSS</div></Eclipse>
                                <Eclipse Width={4.5} ><div>HTML</div></Eclipse>
                                <Eclipse Width={7} ><div>WORDPRESS</div></Eclipse>
                            </FootSec>
                        </PostOne>
                        <PostOne height= {720} IconOne= {11} IconTwo= {18} IconThree= {25} grid="2/2/4/3" >
                            <PicSec Pic={Pic_1}>
                                <div id="ShareDiv">
                                    <div id="ShareWrapper">
                                        <div id="Share"><i className="fas fa-share-alt"></i></div>
                                    </div>
                                    <div className="IconWrapper">
                                        <div className="Icon Icon-1"><i className="fab fa-twitter"></i></div>
                                        <div className="Icon Icon-2"><i className="fab fa-whatsapp"></i></div>
                                        <div className="Icon Icon-3"><i className="fab fa-facebook-f"></i></div>
                                    </div>
                                </div>
                                <div id="PostOneText">
                                    <div className="Text Text-1">Creative</div>
                                    <div className="Text Text-2">FrontEnd</div>
                                    <div className="Text Text-3">WebEnd</div>
                                </div>
                            </PicSec>

                            <DescripSec Height={30}>
                                <Header>
                                    <Title>Normal Post Style</Title>
                                    <SubTitle>Posted 6 Dec </SubTitle>
                                </Header>
                                <Border>
                                    <div style={{
                                        width: '95%', height: '2px', backgroundColor: '#3a4a5d'
                                    }}></div>
                                </Border>
                                <Description>
                                    <TexT>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur distinctio dolorum ea facilis non repellendus velit voluptas voluptates? Accusantium at doloribus eum iste iusto, nam rem repudiandae voluptates. Inventore.
                                </TexT>
                                    <End>
                                        <Read>READ MORE</Read>
                                        <Comment>2 Comment</Comment>
                                    </End>
                                </Description>
                            </DescripSec>
                            <FootSec Height={7}>
                                <Eclipse Width={3.5} ><div>CSS</div></Eclipse>
                                <Eclipse Width={4.5} ><div>HTML</div></Eclipse>
                                <Eclipse Width={7} ><div>WORDPRESS</div></Eclipse>
                            </FootSec>
                        </PostOne>
                        <PostOne height= {720} IconOne= {11} IconTwo= {18} IconThree= {25} grid="4/2/5/3" >
                            <PicSec Pic={Pic_1}>
                                <div id="ShareDiv">
                                    <div id="ShareWrapper">
                                        <div id="Share"><i className="fas fa-share-alt"></i></div>
                                    </div>
                                    <div className="IconWrapper">
                                        <div className="Icon Icon-1"><i className="fab fa-twitter"></i></div>
                                        <div className="Icon Icon-2"><i className="fab fa-whatsapp"></i></div>
                                        <div className="Icon Icon-3"><i className="fab fa-facebook-f"></i></div>
                                    </div>
                                </div>
                                <div id="PostOneText">
                                    <div className="Text Text-1">Creative</div>
                                    <div className="Text Text-2">FrontEnd</div>
                                    <div className="Text Text-3">WebEnd</div>
                                </div>
                            </PicSec>

                            <DescripSec Height={30}>
                                <Header>
                                    <Title>Normal Post Style</Title>
                                    <SubTitle>Posted 6 Dec </SubTitle>
                                </Header>
                                <Border>
                                    <div style={{
                                        width: '95%', height: '2px', backgroundColor: '#3a4a5d'
                                    }}></div>
                                </Border>
                                <Description>
                                    <TexT>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur distinctio dolorum ea facilis non repellendus velit voluptas voluptates? Accusantium at doloribus eum iste iusto, nam rem repudiandae voluptates. Inventore.
                                </TexT>
                                    <End>
                                        <Read>READ MORE</Read>
                                        <Comment>2 Comment</Comment>
                                    </End>
                                </Description>
                            </DescripSec>
                            <FootSec Height={7}>
                                <Eclipse Width={3.5} ><div>CSS</div></Eclipse>
                                <Eclipse Width={4.5} ><div>HTML</div></Eclipse>
                                <Eclipse Width={7} ><div>WORDPRESS</div></Eclipse>
                            </FootSec>
                        </PostOne>
                    </Grid>
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
`
const Grid = styled.div ` 
display: grid ;
grid-template-columns: 37vw 37vw ;
grid-template-rows: 290px 430px 290px 720px ;
`
const PostOne = styled.div` 
    position: relative;
	width: 36vw;
	height: ${ props => props.height }px; 
	border: solid 5px #3a4a5d;
    overflow: hidden;
    grid-area: ${ props => props.grid };

    &:hover{
        box-shadow: 0 0 25px 2px #1b2838;
    }
    &:hover #Share {
        width: 2.8rem;
        height: 2.8rem;
    }
    &:hover #Share .fas {
        font-size: 15px;
    }

    #ShareDiv{
        position: absolute;
        width: 4rem;
        left: 91%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #ShareWrapper {
        position: relative;
        width: 2.8rem;
        height: 2.8rem;
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #Share .fas {
        color: #fff;
        font-size: 0px;
        transition: font-size 0.25s;
    }
    .IconWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    #Share {
        width: 0rem;
        height: 0rem;
        position: relative;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        background-color: #1894ff;
        border-radius: 50%;
        cursor: pointer;
        transition: width 0.25s, height 0.25s;
    }
   
    .Icon {
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        position: absolute;
        background-color: #2c3e50;
        box-shadow: 0 0 25px 2px #1b2838;
        left: 100%;
        color: #fff;
        cursor: pointer;
    }
    .Icon-1 {
        top: ${ props => props.IconOne }% ; 
        transition: left 0.25s ease-in-out 0.3s;
    }
    .Icon-2 {
        top: ${ props => props.IconTwo }% ; 
        transition: left 0.25s ease-in-out 0.2s;
    }
    .Icon-3 {
        top: ${ props => props.IconThree }% ; 
        transition: left 0.25s ease-in-out 0.1s;
    }
    #ShareWrapper:hover ~ .IconWrapper .Icon {
        left: 19%;
    }
    .IconWrapper:hover .Icon {
        left: 19%;
    }
    .Icon-1:hover {
        background-color: #1da1f2;
    }
    .Icon-2:hover {
        background-color: #1ebea5;
    }
    .Icon-3:hover {
        background-color: #3b5998;
    }
    #PostOneText {
        position: absolute;
        height: 8rem;
        width: 7rem;
        top: 40%;
        overflow: hidden;
    }
    .Text {
        width: 6rem;
        height: 1.5rem;
        background-color: #243647;
        text-align: center;
        position: absolute;
        left: -90%;
        padding-top: 3px;
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }
    &:hover .Text {
        left: 6%;
    }
    .Text:hover {
        background-color: #1894ff;
    }
    .Text-1 {
        top: 13%;
        transition: left 0.25s ease-in-out 0.3s;
    }
    .Text-2 {
        top: 40%;
        transition: left 0.25s ease-in-out 0.2s;
    }
    .Text-3 {
        top: 67%;
        transition: left 0.25s ease-in-out 0.1s;
    }
`
const PicSec = styled.div` 
    width: 100%;
    height: 60%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${props => props.Pic});
    background-size: cover;
    &::after{
        background: rgba(44, 62, 80, 0.5);
    }
`
const DescripSec = styled.div` 
    width: 100%;
    height: ${ props => props.Height}%;
`
const FootSec = styled.div` 
    width: 100%;
    height: ${ props => props.Height}%;
    background-color: #27384a;
    display: flex;
    align-items: center;
`
const Header = styled.div` 
    width: 100%;
    height: 30%;
`
const Border = styled.div` 
    width: 100%;
    height: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Description = styled.div` 
    width: 100%;
    height: 70%;
    padding: 15px 15px 0px 3%;
`
const End = styled.div` 
    width: 100%;
    height: 15%;
    margin-top: 18px;
    display: flex;
    flex-direction: row;
`
const Title = styled.p` 
    font-size: 16px;
    font-weight: 700;
    color: white;
    cursor: pointer;
    margin: 3% 1% 0% 3%;
    &:hover{
        color: #1894ff;
    }
`
const SubTitle = styled.p` 
    font-size: 12px;
    color: #869cb1;
    margin: 1% 1% 0% 3%;
`
const TexT = styled.p` 
    font-weight: 400;
    display: inline-block;
    font-size: 13px;
    line-height: 24px;
    font-family: 'Montserrat', Arial, sans-serif;
    color: #869cb1;
`
const Read = styled.p` 
    font-size: 13px;
    font-weight: 700;
    color: #1894ff;
    cursor: pointer;
`
const Comment = styled.div` 
    font-size: 13px;
    font-weight: 700;
    color: #869cb1;
    margin-left: 75%;
    cursor: pointer;
    &:hover{
        color: #ffffff;
    }
`
const Eclipse = styled.div` 
    width: ${ props => props.Width}rem; 
    height: 58%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #869cb1;
    font-size: 12px;
    border-radius: 20px;
    border: 1px solid #869cb1;
    cursor: pointer;
    &:hover{
        background-color: #1894ff;
        color: #fff;
        border: 1px solid transparent;
    }
`
