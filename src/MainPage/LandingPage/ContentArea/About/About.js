import React, { useState, useEffect } from 'react'
import BorderSquare from '../../../Assets/BorderSquare'
import IconSq from '../../../Assets/IconSq'
import styled from 'styled-components'
import Pic_1 from '../../../Assets/bg1.jpg'
import Pic_2 from '../../../Assets/bg2.jpg'
import Pic_3 from '../../../Assets/bg3.jpg'
import Pic_4 from '../../../Assets/bg4.jpg'
import Pic_5 from '../../../Assets/Profile.jpg'
import HeadingText from '../../../Assets/HeadingText'
import Carousel from '../../../Assets/Carousel'

export default function About() {
    const testimonials = [
        {
            Name: 'Amanda Catmull', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 7, Active: false, Pic: Pic_5
        },
        {
            Name: 'Bill', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 1, Active: false, Pic: Pic_2
        },
        {
            Name: 'Saad Tarek', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 2, Active: false, Pic: Pic_1
        },
        {
            Name: 'Bill Fox', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 3, Active: false, Pic: Pic_2
        },
        {
            Name: 'Catmull', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 4, Active: false, Pic: Pic_3
        },
        {
            Name: 'Joey Higgins', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 5, Active: false, Pic: Pic_4
        },
        // {
        //     Name: 'Amanda', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 6, Active: false, Pic: Pic_5
        // },
        // {
        //     Name: 'Billy', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 8, Active: false, Pic: Pic_2
        // }
        // {
        //     Name: 'Amanda', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 7, Active: false, Pic: Pic_6
        // },
        // {
        //     Name: 'Saad Tarek', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 8, Active: false, Pic: Pic_1
        // },
        // {
        //     Name: 'Amanda Catmull', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 9, Active: false, Pic: Pic_5
        // },
        // {
        //     Name: 'Amanda', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 10, Active: false, Pic: Pic_6
        // },
        // {
        //     Name: 'Bill Fox', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 11, Active: false, Pic: Pic_2
        // },
        // {
        //     Name: 'Saad Tarek', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 12, Active: false, Pic: Pic_1
        // },
        // {
        //     Name: 'Bill Fox', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 13, Active: false, Pic: Pic_2
        // },
        // {
        //     Name: 'Amanda Catmull', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 14, Active: false, Pic: Pic_3
        // },
        // {
        //     Name: 'Joey Higgins', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 15, Active: false, Pic: Pic_4
        // },
        // {
        //     Name: 'Amanda Catmull', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 16, Active: false, Pic: Pic_5
        // },
        // {
        //     Name: 'Amanda', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 17, Active: false, Pic: Pic_6
        // },
        // {
        //     Name: 'Saad Tarek', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 18, Active: false, Pic: Pic_1
        // },
        // {
        //     Name: 'Amanda Catmull', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 19, Active: false, Pic: Pic_5
        // },
        // {
        //     Name: 'Amanda', Descrip: 'Designer at ProGlyphs', Comment: 'I am Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! ', Id: 20, Active: false, Pic: Pic_6
        // }
    ]
    const [Testimonial, SetTestimonial] = useState(testimonials)
    const [Left, SetLeft] = useState(-485)
    const [Ind, SetInd] = useState(2)

    const Center = (Case) => {
        let Arr = [...Testimonial]
        if (Case) {
            let ele = Arr.splice(0, 1)
            Arr.splice(5, 0, ele[0])
            if (Left >= 0) {
                SetLeft(-2910)
            } else if (Left === -2910) {
                SetLeft(- 485)
            } else {
                SetLeft(Left - 485)
            }
            SetInd(Ind + 1)
        } else {
            let ele = Arr.splice(5, 1)
            Arr.splice(0, 0, ele[0])
            if (Left === -485) {
                SetLeft(-2910)
            } else if (Left === -2910) {
                SetLeft(- 485)
            } else {
                SetLeft(Left + 485)
            }
            SetInd(Ind - 1)
        }
        SetTestimonial([...Arr])
    }
    return (
        <div style={{
            border: '5px solid #3a4a5d',
            overflow: 'auto',
            overflowX: 'hidden'
        }}>
            <Section Pic={Pic_2} >
                <BorderSquare Text="ABOUT ME" Icon="fas fa-user" Size="45px" />
                <Group_1>
                    <HeadingText Text="KNOW ME" width={15} ConnectorLength={9} />
                    <Group_2>
                        <Pic Pic={Pic_5} ></Pic>
                        <Text>
                            <p style={{ fontWeight: '600',
                                fontSize: '22px',
                                color: '#fff'
                                }}>HELLO,</p>
                            <p style={{
                                fontWeight: '400',
                                fontSize: '14px',
                                fontStyle: 'italic', lineHeight: '24px',
                                letterSpacing: '0.7px',
                                paddingBottom: '15px',
                                borderBottom: '1px solid #3a4a5d', margin: '1rem 0rem 0rem 0rem',
                                color: "#BBB"
                            }}>I’m Saad Tarek. I designed this site so you can get to know me on a personal level. My career as a UX Designer, my portfolio, my personal photography, my blog, my favorite quotes, and so much more. So please sit back and enjoy! </p>
                        </Text>
                    </Group_2>
                </Group_1>
                <Group_3>
                    <HeadingText Text="SERVICE" ConnectorLength={12} />
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <IconSq Head="WEB DESIGN" Text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. " Icon="fas fa-laptop" Size="35px" />
                        <IconSq Head="RESPONSIVE UI" Text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. " Icon="fas fa-laptop" Size="35px" />} />
                        <IconSq Head="DB DESIGN" Text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. " Icon="fas fa-laptop" Size="35px" />
                        <IconSq Head="PHOTOGRAPHY" Text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. " Icon="fas fa-laptop" Size="35px" />
                    </div>
                </Group_3>
                <Group_4>
                    <HeadingText Text="TESTIMONIALS" ConnectorLength={15} />
                    <CarouselRow Left={Left}>
                        {Testimonial.map((T, ind) => {
                            if (ind === Ind) {
                                return (
                                    <Carousel key={T.Id} Name={T.Name} Descrip={T.Descrip} Comment={T.Comment} Pic={T.Pic} Size={1} Blurr={1} BorderColor="#1894ff" />)
                            } else {
                                return (<Carousel key={T.Id} Name={T.Name} Descrip={T.Descrip} Comment={T.Comment} Pic={T.Pic} Size={0.8}
                                    Blurr={0.5} BorderColor="#ffffff00" />)
                            }
                        })}
                    </CarouselRow>
                    <CarouselControl>
                        <ButtonBubble Pic={Testimonial[Ind - 1].Pic} BackgroundImg={undefined} onClick={() => Center(false)} />
                        <ButtonBubble Pic={Testimonial[Ind].Pic} BackgroundImg={Testimonial[Ind].Pic} />
                        <ButtonBubble Pic={Testimonial[Ind + 1].Pic} BackgroundImg={undefined} onClick={() => Center(true)} />
                    </CarouselControl>
                </Group_4>
            </Section>
        </div>
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
  height: 45rem;
  background-color: #2c3e50;
`
const Group_2 = styled.div` 
display: flex;
  flex-direction: row;
  padding: 1rem 0rem 0rem 3rem;
`
const Pic = styled.div` 
background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${ props => props.Pic});
  width: 446px;
  height: 446px;
  margin: 2rem 1rem 0rem 0rem;
  background-size: cover;
`
const Text = styled.div` 
  width: 57rem;
  text-align: start;
  margin-left: 1rem;
  margin-top: 3rem;
`
const Group_3 = styled.div`
position: relative;
  background-size: cover;
  background-attachment: fixed;
  width: 94rem;
  height: 60vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${Pic_1});
`
const Group_4 = styled.div` 
width: 100%;
  height: 45rem;
  background-color: #2c3e50;
  position: relative ;
`
const CarouselRow = styled.div` 
display: flex;
flex-direction: row;
margin-top: 5rem;
position: absolute;
transform: translateX(${props => props.Left}px);
transition: transform 500ms ease 0s;
`
const CarouselControl = styled.div` 
width: 100%;
height: auto;
position: absolute;
bottom: 0%;
display: flex;
flex-direction: row;
justify-content: center;
`
const ButtonBubble = styled.div` 
width: 65px;
height: 65px;
border-radius: 50%;
border: solid #2c3e50 5px;
background-color: #3a4a5d;
box-shadow: 0 0 25px 1px #1b2838;
background-image: url(${ props => props.BackgroundImg});
background-size: cover;
cursor: pointer;
&:hover{
    background-image: url(${ props => props.Pic});
}
`