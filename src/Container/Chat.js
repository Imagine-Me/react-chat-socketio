import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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
        padding: theme.spacing(3),
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
    }
}));

function Chat(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [users, setUsers] = useState([])

    const history = useHistory()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        if (props.socket == null || (localStorage.getItem('p-react-chat') === undefined && localStorage.getItem('p-react-chat') === null)) {
            history.push('/')
            return
        }
        const user = localStorage.getItem('p-react-chat')
        props.socket.emit('user_join', {
            userName: user.name,
            id: user.id
        })
        props.socket.on('user_join', function (data) {
            const user = localStorage.getItem('p-react-chat')
            const id = user.id
            const d = data.users
            console.log(user,id,data,d)
            const state_data = [user]
            d.map(val => {
                if (val.id !== id)
                    state_data.push(val)
            })
            setUsers(state_data)
        })
    }, [props.socket])





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
                {users.map((user, index) => (
                    <ListItem button key={user}>
                        <ListItemIcon><Avatar className={classes.users}>{JSON.parse(user).name.charAt(0)}</Avatar></ListItemIcon>
                        <ListItemText primary={JSON.parse(user).name} />
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
                        Responsive drawer
          </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
                            keepMounted: true, // Better open performance on mobile.
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
            </main>
        </div>
    );
}

Chat.propTypes = {
    window: PropTypes.func,
};

export default Chat;
