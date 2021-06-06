import React from 'react'
import { Avatar, IconButton, makeStyles } from '@material-ui/core'
import { KeyboardArrowDownRounded } from '@material-ui/icons';
import Merlin from '../../assets/images/c.jpg'

const Profile = () => {

    const useStyles = makeStyles(theme => ({
        avatarStyle: {
            width: theme.spacing(4),
            height: theme.spacing(4),
        },
        keyboardArrow: {
            color: "rgb(108, 95, 196)"
        }
    }));

    const classes = useStyles();

    return (
        <div className="d-flex align-items-center">
            <Avatar className={classes.avatarStyle} src={Merlin} />

            <span className="pl-3">
                Sel Mek
            </span>

            <span className="pl-5">
                <IconButton className={classes.keyboardArrow}>
                    <KeyboardArrowDownRounded />
                </IconButton>
            </span>
        </div>
    )
}

export default Profile
