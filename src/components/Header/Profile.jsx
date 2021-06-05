import React from 'react'
import { Avatar, IconButton, makeStyles } from '@material-ui/core'
import { KeyboardArrowDownRounded } from '@material-ui/icons';

const Profile = () => {

    const useStyles = makeStyles(theme => ({
        avatarStyle: {
            width: theme.spacing(4),
            height: theme.spacing(4),
        },
        keyboardArrow: {
            color: "darkblue"
        }
    }));

    const classes = useStyles();

    return (
        <div className="d-flex align-items-center">
            <Avatar className={classes.avatarStyle} />

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
