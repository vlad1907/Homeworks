import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes = ['dark', 'light', 'color'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)
    const dispatch = useDispatch()

    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div>
            <div className={`${s.container} ${s[theme]}`}>
                <h3 className={s[theme + '-text']}>
                    Homework 12
                </h3>

                <SuperSelect options={themes} onChangeOption={onChangeCallback}/>

            </div>
        </div>
    );
}

export default HW12;