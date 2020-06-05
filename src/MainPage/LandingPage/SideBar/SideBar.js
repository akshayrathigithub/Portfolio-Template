import React from "react";
import Icon from "./Icon";
import Profile from '../../Assets/Profile.jpg'
import styled from 'styled-components'
import NavItem from "./NavItem";
import BorderH from "./BorderH";
import { connect } from "react-redux";

const SideBar =(props) => {
    return (
      <div id="SideBar">
        <div id="Top">
          <Icon Size="25px" icon="fab fa-facebook-f" color="#3b5998" />
          <Icon Size="25px" icon="fab fa-twitter" color="#1da1f2"/>
          <Icon Size="25px" icon="fab fa-linkedin-in" color="#0073b0"/>
          <Icon Size="25px" icon="fab fa-github-alt" color="#24292e"/>
        </div>
        <BorderH />
        <div style={{ padding:'10px'}}>
          <div id="border">
            <IMG/>
          </div>
        </div>
        <BorderH />
        <div id="Nav">
            <NavItem icon="fas fa-home" name="HOME" active={ (props.Data === 'HOME') ? '#1894ff' : '#27384a'} />
            <BorderH />
            <NavItem icon="fas fa-user" name="ABOUT ME" active={ (props.Data === 'ABOUT ME') ? '#1894ff' : '#27384a'} />
            <BorderH />
            <NavItem icon="fas fa-laptop" name="PORTFOLIO" active={ (props.Data === 'PORTFOLIO') ? '#1894ff' : '#27384a'} />
            <BorderH />
            <NavItem icon="fas fa-leaf" name="RESUME" active={ (props.Data === 'RESUME') ? '#1894ff' : '#27384a'} />
            <BorderH />
            <NavItem icon="fab fa-blogger-b" name="BLOG" active={ (props.Data === 'BLOG') ? '#1894ff' : '#27384a'} />
            <BorderH />
            <NavItem icon="fas fa-headphones-alt" name="CONTACT ME" active={ (props.Data === 'CONTACT ME') ? '#1894ff' : '#27384a'} />
        </div>
      </div>
    )
  }
  const mapStateToProps = (State) => {
    if (State.SideBar.State)
        return {
            Data: State.SideBar.State
        }
    else
    return{
        Data: 'HOME'
    }    
}
export default connect(mapStateToProps)(SideBar)
  const IMG = styled.img`
  width: 190px;
  height: 190px;
  background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${Profile});
  background-size: cover;
  margin: 0px auto;
  display: block;
`