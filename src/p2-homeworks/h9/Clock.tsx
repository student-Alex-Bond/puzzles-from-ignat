import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<string>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
        // stop
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date().toLocaleTimeString())

            // setDate
        }, 1000)
        setTimerId(id)

        return ()=> {
            clearInterval(id)
        }
    }

    const onMouseEnter = () => {
        setShow(true)
        // show
    }
    const onMouseLeave = () => {
        setShow(false)
        // close
    }

    const stringTime = new Date().toLocaleTimeString()//'Time' // fix with date
    const stringDate = new Date().toLocaleDateString()//'Date' // fix with date

    return (
        <div >
            <div style={{width: '50px', height: '40px', marginLeft: '10px'}}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}



            {show && (
                <div>
                    {stringDate}

                </div>
            )}
            </div>
            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
