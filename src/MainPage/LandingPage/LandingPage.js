import React, { useRef} from 'react'
import SideBar from './SideBar/SideBar'
import ContentArea from './ContentArea/ContentArea'
import { connect } from 'react-redux'

const LandingPage =(props) => {
        return (
            <div id="LandingPage">
                <div style={{ padding: '25px 0px 10px 25px' }}>
                    <SideBar />
                </div>
                <div style={{ padding: '25px 0px', margin: '0 auto' }}>
                        <ContentArea Slide={props.Data} />
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
export default connect(mapStateToProps)(LandingPage)