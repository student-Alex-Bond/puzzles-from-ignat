import React from 'react'
import style from './Affair.module.css'


type AffairPropsType = {
    // key не нужно типизировать
    id: number
    affair: string
    priority: string
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.id)
    }// need to fix

    return (
        <div className={style.d}>
            <span className={style.affair}>{props.affair}</span>
            <span className={style.priority}>[ {props.priority} ]</span>
            <button onClick={deleteCallback} className={style.button}>X</button>
        </div>
    )
}

export default Affair
