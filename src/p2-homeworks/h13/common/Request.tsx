import React, {useState} from 'react';
import {RequestsAPI} from "../bll/RequestsAPI";
import styles from './Request.module.css'


export const Request = () => {
    const [content, setContent] = useState<any>()
    const [value, setValue] = useState<boolean>(false)

    const postRequest = (value: boolean) => {

        RequestsAPI.postRequest(value).then((response) => {
            setContent(response)
        })
    }

    return (
        <div>
            <div>{JSON.stringify(content)}</div>
      <div className={styles.wrapper}>
          <input className={styles.input} type={"checkbox"} checked={value}
                 onChange={() => {
                     setValue(!value)
                 }}
          />
          <button onClick={()=>{postRequest(value)}}>Send Request</button>
      </div>
        </div>
    );
};

