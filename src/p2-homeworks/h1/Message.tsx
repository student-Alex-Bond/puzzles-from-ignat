import React from 'react'
import {messageDataPropsType} from './HW1'
import styles from './Message.module.css'


function Message(props: messageDataPropsType) {

    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.avatar}><img src={props.avatar} alt={'avatar'}/></div>
                <div className={styles.messageItem}>
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.wrap}>
                        <span className={styles.message}>{props.message}</span>
                        <div className={styles.time}>{props.time}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Message
