import React from 'react';

import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(theme => ({
    Joined: {
        display: 'flex',
        justifyContent: 'center'
    },
    User: {
        padding: '7px 15px',
        borderRadius: '15px',
        backgroundColor: 'rgba(128, 128, 128, 0.116)',
        marginBottom: '8px'
    }
}))

const UserJoin = (props) => {
    const classes = useStyle(props)
    return (
        <div className={classes.Joined}>
            <div className={classes.User}>
                <span style={{ fontWeight: '500'}}>Prince</span> joined
            </div>
        </div>
    );
}

export default UserJoin;