import React, { useEffect } from 'react';

import { useHistory } from 'react-router'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

import SendIcon from '@material-ui/icons/Send';

import { userState } from '../recoil/UserDetail'
import { useRecoilState, useResetRecoilState } from 'recoil'

import Message from '../Components/Message'
import UserJoin from '../Components/UserJoin'

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100%'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        position: "relative"
    },
    centerContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.primary.main
    },
    general: {
        backgroundColor: 'purple'
    },
    users: {
        backgroundColor: theme.palette.secondary.main,
        textTransform: 'capitalize'
    },
    chat: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: '5px',
        height: '50px',
        padding: '0 15px'
    },
    inputFlex: {
        display: 'flex',
        height: '100%',
        justifyContent: 'space-between'
    },
    Input: {
        width: 'calc(100% - 60px)',
        padding: '0 12.5px',
        backgroundColor: 'rgb(230 230 230)',
        borderRadius: '25px'
    },
    inputIcon: {
        width: '35px',
        textAlign: 'center',
        padding: '5px'

    },
    SendButton: {
        height: '100%',
        backgroundColor: theme.palette.primary.main,
        border: 'none',
        borderRadius: '50%',
        padding: '7px',
        width: '50px'
    },
    Message: {
        padding: '0 15px 5px 15px'
    }
}));

function Chat(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [userDetail, setUserDetail] = useRecoilState(userState)

    const history = useHistory()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        if (props.socket == null || (localStorage.getItem('p-react-chat') === undefined && localStorage.getItem('p-react-chat') === null)) {
            history.push('/')
            return
        }
        const user = JSON.parse(localStorage.getItem('p-react-chat'))
        props.socket.emit('user_join', {
            userName: user.name,
            id: user.id
        })
        props.socket.on('user_join', function (data) {
            console.log("USER JOINED.....")
            const user = JSON.parse(localStorage.getItem('p-react-chat'))
            const id = user.id
            const d = data.users
            console.log(user, id, data, d)
            const state_data = [user]
            d.map(val => {
                if (val.id !== id)
                    state_data.push(val)
            })
            console.log("USERS ", state_data)
            setUserDetail(old => ({
                ...old,
                user: state_data
            }))
        })

        props.socket.on('user_joined', function (data) {
            
        })

        props.socket.on('on_message', function (data) {
            setUserDetail(old => {
                const d = [...old.messages]
                d.push(data)
                return {
                    ...old,
                    messages: d
                }
            })
        })
    }, [props.socket])

    const keyupEvent = (event) => {
        if (event.keyCode == 13) {
            // Send value
            sendData()
        }
    }

    const sendData = () => {
        if (userDetail.input !== "") {
            props.socket.emit('message', {
                msg: userDetail.input,
                name: JSON.parse(localStorage.getItem('p-react-chat')).name
            })
            const d = [...userDetail.messages]
            d.push({
                name: "You",
                msg: userDetail.input
            })
            setUserDetail(old => ({
                ...old,
                input: "",
                messages: d
            }))
        }
    }

    const message = userDetail.messages.map((val, i) => {
        if (val.name === "You")
            return <div key={i} style={{ display: "flex", width: '100%', justifyContent: "flex-end" }}><Message user name='You' >{val.msg}</Message></div>
        else
            return <Message key={i} name={val.name} >{val.msg}</Message>
    })

    const drawer = (
        <div>
            <div className={[classes.centerContent, classes.toolbar].join(" ")} >
                <Typography variant="h5" component="h5"> React Chat</Typography>
            </div>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon><Avatar className={classes.general}>G</Avatar></ListItemIcon>
                    <ListItemText primary={`General`} />
                </ListItem>
            </List>
            <Divider />
            <List>
                {userDetail.user.map((user, index) => (
                    <ListItem button key={user}>
                        <ListItemIcon><Avatar className={classes.users}>{user.name.charAt(0)}</Avatar></ListItemIcon>
                        <ListItemText primary={user.name} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        General
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className={classes.Message}>
                    {message}
                </div>

                <div className={classes.chat}>
                    <div className={classes.inputFlex}>
                        <div className={classes.Input}>
                            <TextField type="text" fullWidth style={{ padding: '10px' }} onChange={(event) => setUserDetail(old => ({ ...old, input: event.target.value }))} value={userDetail.input} onKeyUp={keyupEvent} />
                        </div>
                        <button className={classes.SendButton} onClick={sendData}><SendIcon style={{ color: 'white' }} /></button>
                    </div>
                </div>
            </main>
        </div>
    );
}

Chat.propTypes = {
    window: PropTypes.func,
};

export default Chat;
