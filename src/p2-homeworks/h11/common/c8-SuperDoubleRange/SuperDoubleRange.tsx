import React from 'react'
import styles from './SuperDoubleRane.module.css'


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number] | undefined) => void
    value?: [number, number],
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    let valueMinMax = value




    return (
        <div className={styles.doubleRange}>
            <input type={"range"} value={valueMinMax ? valueMinMax[0] : ""}
                   onChange={(e) => {
                       if (valueMinMax) {
                           valueMinMax[0] = e.currentTarget.valueAsNumber
                       }
                       if (onChangeRange) {
                           onChangeRange(valueMinMax)
                       }
                   }}
            />
            <input type={"range"} value={valueMinMax ? valueMinMax[1] : ""}
                   onChange={(e) => {
                       if (valueMinMax) {
                           valueMinMax[1] = e.currentTarget.valueAsNumber
                       }
                       if (onChangeRange) {
                           onChangeRange(valueMinMax)
                       }
                   }}/>
        </div>
    )
}
export default SuperDoubleRange
