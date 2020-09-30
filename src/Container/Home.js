import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useHistory } from 'react-router'
import io from 'socket.io-client'


import {v4 as uuidv4} from 'uuid'




import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'




const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: 'red',
        textTransform: 'capitalize'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

const Home = (props) => {
    const [name, setName] = useState("")
    const classes = useStyles(props)

    const history = useHistory()

    const onSubmit = (event) => {
        event.preventDefault()
        if (props.socket !== null) {
            const user = {}
            user.name = name
            user.id = uuidv4()
            localStorage.setItem('p-react-chat', JSON.stringify(user))
            history.push('/chat')
        }
    }

    useEffect(() => {
        props.setsocket(io())
    }, [])

    useEffect(() => {
        if (props.socket !== null) {
            if (localStorage.getItem('p-react-chat') !== undefined && localStorage.getItem('p-react-chat') !== null) {
                setName(localStorage.getItem('p-react-chat').name)
                history.push('/chat')
            }
        }
    }, [props.socket])

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    {name.length > 0 ? name.charAt(0) : '?'}
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} onSubmit={onSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Enter Name"
                        name="name"
                        autoFocus
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >Login</Button>
                </form>
            </div>
        </Container>
    );
}


export default Home;