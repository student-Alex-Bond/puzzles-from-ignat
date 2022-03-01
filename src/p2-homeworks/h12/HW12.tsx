import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes: string[] = ['dark', 'red', 'some'];

function HW12() {

    const dispatch = useDispatch()
    const theme = useSelector<AppStoreType, string>(state => state.theme.ChangeTheme.currentTheme);// useSelector
    // useDispatch, onChangeCallback
    const onChangeOption = (value: string) => {
        dispatch(changeThemeC(value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
                <SuperRadio options={themes} onChangeOption={onChangeOption} value={theme}/>
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
