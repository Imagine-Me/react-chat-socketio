import React from 'react';

import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(theme => ({
    Wrapper: {
        display: 'flex',
        marginBottom: '8px'
    },
    Wrapper1: {
        display: 'flex',
        marginBottom: '8px'
    },
    message1Arrow: {
        width: 0,
        height: 0,
        borderTop: '0px solid transparent',
        borderBottom: '10px solid transparent',
        borderRight: '10px solid rgba(0, 0, 255, 0.103)'
    },
    message2Arrow: {
        width: 0,
        height: 0,
        borderTop: '0px solid transparent',
        borderBottom: '10px solid transparent',
        borderLeft: '10px solid rgba(0, 128, 0, 0.137)'
    },
    Message: {
        padding: '5px',
        backgroundColor: 'rgba(0, 0, 255, 0.103)'
    },
    Message1: {
        padding: '5px',
        backgroundColor: 'rgba(0, 128, 0, 0.137)'
    },
    User: {
        fontWeight: '500',
        fontSize: '16px'
    }
}))

const Message = (props) => {
    const classes = useStyle(props)

    let m = <div className={classes.Wrapper}>
        <div className={classes.message1Arrow}></div>
        <div className={classes.Message}>
            <div className={classes.User}>
                {props.name}
            </div>
            <div className={classes.Chat}>
                {props.children}
            </div>
        </div>
    </div>

    if(props.user)
    m = <div className={classes.Wrapper1}>
        <div className={classes.Message1}>
            <div className={classes.User}>
                {props.name}
            </div>
            <div className={classes.Chat}>
                {props.children}
            </div>
        </div>
        <div className={classes.message2Arrow}></div>
    </div>


    return m;
}

export default Message;