import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import gif from './1493.png'
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)

    const setLoading = () => {
      dispatch(loadingAC(true))
        setTimeout(()=> {
           dispatch(loadingAC(false))
        }, 2000)
       // console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img src={gif} alt={'loader'}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>view loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
