import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: ( p: FilterType)=>  void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a.name}
            priority={a.priority}
            id = {a._id}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div>

            {mappedAffairs}

            <SuperButton onClick={setAll} style ={{marginRight: '10px'}}>All</SuperButton>
            <SuperButton onClick={setHigh} style ={{marginRight: '10px'}}>High</SuperButton>
            <SuperButton onClick={setMiddle} style ={{marginRight: '10px'}}>Middle</SuperButton>
            <SuperButton onClick={setLow}>Low</SuperButton>
        </div>
    )
}

export default Affairs
