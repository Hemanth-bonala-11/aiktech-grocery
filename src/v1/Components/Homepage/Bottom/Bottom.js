import React from 'react'
import './Bottom.scss';
import backImg from '../../../Assets/Images/footer/bottom.png';
import playStoreIcon from '../../../Assets/Images/playstore.png';
import appStoreIcon from '../../../Assets/Images/appstore.png';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionsCreator } from "../../../Redux/actions/actionsCreator";

const mapStateToProps = ({  auth }) => ({
    auth,
  });
const Bottom = (props) => {
    const {
        auth: {tenantDetails}
    } = useSelector(mapStateToProps);
    const dispatch = useDispatch()
    useEffect(async ()=>{
        dispatch(actionsCreator.FETCH_TENANT_DETAILS());
      },[])
    console.log(tenantDetails,"tenantDetails in bottom");
    return (
        <div className='bottom-wrapper' style={{ backgroundImage: `url(${backImg})` }}>
            <p>Get your Grocery Delivered Instantly with {`${tenantDetails.title}`}</p>
            <div className='bottom-image'>
                {/* <img src={playStoreIcon} alt="" /> */}
                {/* <img src={appStoreIcon} alt="" /> */}
            </div>

        </div>
    )
}

export default Bottom