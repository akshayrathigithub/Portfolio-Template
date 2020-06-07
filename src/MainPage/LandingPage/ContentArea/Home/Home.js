import React, { Component } from 'react'
import styled from 'styled-components'
import Pic from '../../../Assets/skills.jpg'

export default class Home extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      words: ["WEB DEVELOPER.", "WEB DESIGNER."],
      wait: 3000
    };
    this.TyperWriter()
  }

  TyperWriter = () => {
    let txt = "";
    let wordIndex = 0;
    let isDeleting = false;
    this.Type(txt, wordIndex, isDeleting)
  }

  // Typing logic

  Type = (txt, wordIndex, isDeleting) => {
    const CurrInd = wordIndex % this.state.words.length;
    const fullTxt = this.state.words[CurrInd];
    if (isDeleting) {
      txt = fullTxt.substring(0, txt.length - 1);
    } else {
      txt = fullTxt.substring(0, txt.length + 1);
    }
    // Speed to write and remove

    let typeSpeed = 300;
    if (isDeleting) {
      typeSpeed = typeSpeed / 2;
    }
    if (!isDeleting && txt === fullTxt) {
      typeSpeed = this.state.wait;
      isDeleting = true;
    } else if (isDeleting && txt === "") {
      isDeleting = false;
      wordIndex++;
      typeSpeed = 500;
    }
    if (this.myRef.current !== null) {
      this.myRef.current.innerHTML = `<span id="txt">${txt}</span>`;
      setTimeout((Txt = txt, WI = wordIndex, Del = isDeleting) => this.Type(Txt, WI, Del), typeSpeed)
    } else
      setTimeout((Txt = txt, WI = wordIndex, Del = isDeleting) => this.Type(Txt, WI, Del), typeSpeed)
  };
  render() {
    return (
      <Section Pic={Pic}>
        <Header>
          <First>HI, IAM</First>
          <Second>JOHN DOE</Second>
          <Third>
            <p>{' '}<span id="txt-type" ref={this.myRef}></span>{" "}</p>
          </Third>
        </Header>
      </Section>
    );
  }
}
const Section = styled.div` 
  background-size: cover;
  background-attachment: fixed;
  width: 80vw;
  height: 95vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${props => props.Pic});
`
const Header = styled.div`
width: 80vw;
height: 95vh;
display: flex;
justify-content: center;
flex-direction: column;
`
const First = styled.p`
margin-left: 3rem;
font-size: 20px;
color: #BBB;
font-weight: 700;
`
const Second = styled.p`
font-size: 90px;
margin: 10px 0px 10px 2.5rem;
font-weight: 900;
color: #fff;
font-family: inherit;
letter-spacing: 4px;
line-height: 1;
`
const Third = styled.div`
margin-left: 3rem;
font-size: 20px;
color: #BBB;
font-weight: 700;
line-height: 1.1;
`