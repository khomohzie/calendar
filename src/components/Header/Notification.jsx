import React, { useState } from 'react'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import { Badge, IconButton, makeStyles } from '@material-ui/core'

const Notification = () => {

    const useStyles = makeStyles(theme => ({
        margin: {
            margin: theme.spacing(0),
        },
        avatarStyle: {
            width: theme.spacing(),
            height: theme.spacing(),
        },
    }));

    const classes = useStyles();
    const [showBadge, setShowBadge] = useState(true);

    const horizontal = 'right';
    const vertical = 'top';

    return (
        showBadge ? (
            <IconButton>
                <Badge
                    color="primary"
                    variant="dot"
                    badgeContent={1}
                    anchorOrigin={{
                        horizontal,
                        vertical,
                    }}
                    className={classes.margin}
                >
                    <NotificationsNoneIcon />
                </Badge>
            </IconButton>) : (
                <IconButton>
                    <NotificationsNoneIcon />
                </IconButton>
            )
    )
}

export default Notification
