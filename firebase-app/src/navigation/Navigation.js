import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'
import SignOutButton from '../auth/SignOut'
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    linkContainer: {
        '& a': {
            textDecoration: 'none',
            color: 'black'
        }
    }
};

class Navigation extends Component {
    state = {
        user: null
    };

    componentDidMount() {

    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar className={classes.linkContainer}>
                        <Fragment>
                            <NavLink to='/counter'>
                                <Button color="inherit">Counter</Button>
                            </NavLink>
                            <NavLink to='/counter-live'>
                                <Button vcolor="inherit">Counter Live</Button>
                            </NavLink>
                            <NavLink to='/chat'>
                                <Button vcolor="inherit">Chat</Button>
                            </NavLink>
                        </Fragment>
                        <Typography variant="h6" className={classes.grow}>
                            {this.state.user ? this.state.user.email : ''}
                        </Typography>
                        {
                            this.state.user ? (
                                <Fragment>
                                    <NavLink to='/profile'>
                                        <Button vcolor="inherit">Profile</Button>
                                    </NavLink>
                                    <SignOutButton class={classes.left}/>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <NavLink to='/sign-in'>
                                    <Button vcolor="inherit">Sign In</Button>
                                    </NavLink>
                                    <NavLink to='/sign-up'>
                                    <Button vcolor="inherit">Sign Up</Button>
                                    </NavLink>
                                </Fragment>
                            )
                        }

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Navigation);