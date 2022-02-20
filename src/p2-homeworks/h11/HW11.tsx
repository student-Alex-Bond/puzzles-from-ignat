import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    let [value2, setValue2] = useState(100)

    if (value1 > value2) {
        value2 = value1
    }


    const onChangeRange = (value: [number, number] | undefined) => {

        if (value) {
            setValue1(value[0])
        }

        if (value) {
            setValue2(value[1])
        }
    }

    return (
        <div>
            <hr/>
            homeworks 11


            {/*should work (должно работать)*/}
            <div >
                <span style={{display: 'inline-block',width: '30px'}}>{value1}</span>
                <SuperRange value={value1} step={1}
                            onChange={(e) => {
                                setValue1(e.currentTarget.valueAsNumber)
                            }}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div style={{display: 'flex'}}>
                <span style={{width: '30px'}}>{value1}</span>
                <SuperDoubleRange value={[value1, value2]} onChangeRange={onChangeRange}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
