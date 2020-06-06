import React from "react";
import { connect } from "react-redux";
import { SideBarAction } from '../../../Store/Action/SideBarAction'
import styled from "styled-components";

function NavItem(props) {
  const Clicked =()=>{ props.SideBarAction(props.name)}
  return (
    <Navitem onClick ={ Clicked }>
      <Icon active={props.active} color={props.active === "#1894ff" ? '#fff' : '#BBB'}>
          <i className={props.icon}></i>
      </Icon>
      <Text color={props.active === "#1894ff" ? '#fff' : '#BBB'}>
        <p>{props.name}</p>
      </Text>
    </Navitem>
  );
}
const Navitem = styled.div ` 
  display: flex;
	flex-direction: row;
	margin-top: 8px;
	cursor: pointer;
`
const Icon = styled.div ` 
  margin-left: 15px;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: ${props => props.color};
  font-size: 14px;
  background-color: ${props => props.active};
  border-radius: 50%;
`
const Text = styled.div ` 
margin: 8px 0px 5px 10px;
color: ${props => props.color};
	font-size: 13px;
	font-weight: 600;
	transition: all 0.2s ease-in-out 0s;
`
const mapDispatchToProps = dispatch =>{
  return{
    SideBarAction: Data => dispatch(SideBarAction(Data))
  }
}
export default connect(null, mapDispatchToProps)(NavItem)