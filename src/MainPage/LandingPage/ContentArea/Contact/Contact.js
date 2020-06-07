import React, { useState, useRef } from 'react'
import BorderSquare from '../../../Assets/BorderSquare'
import HeadingText from '../../../Assets/HeadingText'
import styled from 'styled-components'
import Pic_1 from '../../../Assets/bg1.jpg'
import IconSq from '../../../Assets/IconSq'

export default function Contact() {
    const [State, setState] = useState({ MessageTitle: '', Name: '', Email: '', Phone: 0, Message: '' })
    const [Error, setError] = useState({ TitleError: false, NameError: false, EmailError: false, MessageError: false })
    const Called = e => {
        const Value = e.target.value
        const Name = e.target.name
        setState((currState) => ({ ...currState, [Name]: Value }))
    }
    const Send = () => {
        let error = Error
        const mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/
        console.log(State.MessageTitle.length, State.Name.length, State.Email.match(mailformat), State.Message.length)
        if (State.MessageTitle.length > 3) {
            error.TitleError = false
        }
        else
            error.TitleError = true

        if (State.Name.length > 3) {
            error.NameError = false
        }
        else
            error.NameError = true

        if (State.Email.match(mailformat)) {
            error.EmailError = false
        }
        else
            error.EmailError = true

        if (State.Message.length > 3) {
            error.MessageError = false
        }
        else
            error.MessageError = true
        console.log(error, State)    
    }
    return (
        <div style={{
            border: '5px solid #3a4a5d',
            overflow: 'auto',
            overflowX: 'hidden'
        }}>
        <Section >
            <Background Pic={Pic_1}>
                <BorderSquare Text="CONTACT ME" Icon="fas fa-headphones-alt" Size="45px" />
                <Group_1>
                    <HeadingText Text="GET IN TOUCH" width={12} ConnectorLength={12} />
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <IconSq Head="LOCATION" Text="New York, USA" Icon="fas fa-map-marker-alt" Size="45px" />
                        <IconSq Head="PHONE" Text="+123456789" Icon="fas fa-mobile-alt" Size="45px" />
                        <IconSq Head="EMAIL" Text="test@test.com" Icon="fas fa-envelope" Size="45px" />
                    </div>
                </Group_1>
                <HeadingText Text="SEND MESSAGE" width={14} ConnectorLength={14} />
                <InputForm>
                    <InputWrapper Area="1/1/2/2">
                        <Input Border="15px 0px 0px 0px" Height={(Error.TitleError) ? 75 : 92} placeholder="Message About..." type="text" name="MessageTitle" onChange={Called} value={State.MessageTitle} />
                        <p style={{ color: 'red', fontSize: '12px'}}> {(Error.TitleError) ? 'Please Enter The Title Of Message' : null}</p>
                    </InputWrapper>
                    <InputWrapper Area="1/2/2/3">
                        <Input Border="0px 15px 0px 0px" Height={(Error.NameError) ? 75 : 92} placeholder="Your Full Name" type="text" name="Name" value={State.Name} onChange={Called} />
                        <p style={{ color: 'red', fontSize: '12px'}}> {(Error.NameError) ? 'Please Enter Your Name' : null}</p>
                    </InputWrapper>
                    <InputWrapper Area="2/1/3/2">
                        <Input Border="0px 0px 0px 0px" Height={(Error.EmailError) ? 75 : 92} placeholder="Email" type="email" value={State.Email} name="Email" onChange={Called} />
                        <p style={{ color: 'red', fontSize: '12px'}}> {(Error.EmailError) ? 'Please Use Valid Email' : null}</p>
                    </InputWrapper>
                    <InputWrapper Area="2/2/3/3">
                        <Input Border="0px 0px 0px 0px" Height={(Error.EmailError) ? 75 : 92} placeholder="Phone" type="number" value={State.Phone} name="Phone" onChange={Called} />
                        <p style={{ color: 'red', fontSize: '12px'}}></p>
                    </InputWrapper>
                    <InputWrapper Area="3/1/4/3">
                        <Input Border="0px 0px 0px 0px" Height={(Error.MessageError) ? 87 : 96} placeholder="Your Message..." type="text" value={State.Message} name="Message" onChange={Called} />
                        <p style={{ color: 'red', fontSize: '12px'}}> {(Error.MessageError) ? "The Message Can't Be Empty" : null}</p>
                    </InputWrapper>
                    <InputWrapper Area="4/1/5/3">
                        <Button onClick={Send} Border="0px 0px 15px 15px">Send Your Message</Button>
                    </InputWrapper>
                </InputForm>
            </Background>
        </Section>
        </div>
    )
}
const Section = styled.div` 
    width: 80vw;
    height: 95vh;
`
const Background = styled.div` 
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: auto;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${props => props.Pic});
`
const Group_1 = styled.div` 
    width: 100%;
    height: auto;
    background-color: #1b2838;
  `
const InputForm = styled.div` 
    display: grid;
    width: 100%;
    height: auto;
    justify-content: center;
    grid-template-columns: 32% 32%;
    grid-template-rows: 3.5rem 3.5rem 8rem 3rem;
    padding-top: 2%;
    padding-bottom: 5%;
    column-gap: 5px;
`
const InputWrapper = styled.div`
    width: 100%;
    height: 100%;
    grid-area: ${props => props.Area};
`
const Input = styled.input` 
    width: 100%;
    height: ${props => props.Height}%;
    padding-left: 10px;
    background: rgba(44, 62, 80, 0.8);
    border-radius: ${props => props.Border};
    border-style: none;
    opacity: 1;
    color: #fff;
    font-size: 14px;
`
const Button = styled.div` 
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 15px;
    text-align: center;
    background: rgba(44, 62, 80, 0.8);
    border-radius: ${props => props.Border};
    color: #fff;
    font-size: 14px;
    z-index: 1;
    cursor: pointer;

&::before{
    content: '';
    width: 0%;
    height: 100%;
    position: absolute;
    background: #1894ff;
    border-radius: ${props => props.Border};
    top: 0%;
    left: 0;
    z-index: -1;
    transition: width 0.4s;
}
&:hover::before{
    width: 100%;
}
`