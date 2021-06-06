import React from 'react'
import { KeyboardArrowLeftRounded } from '@material-ui/icons'
import './RightWidget.css'
import { Avatar, IconButton, makeStyles } from '@material-ui/core'
import styled from 'styled-components'

const RightWidget = () => {

    const useStyles = makeStyles(theme => ({
        keyboardArrow: {
            color: "rgb(108, 95, 196)",
            fontSize: "2rem",
            position: "relative",
            right: "10px",
        },
        avatarIcon: {
            marginTop: "1rem",
            marginLeft: "6px",
            textDecoration: "none",
            transition: "0.3s",
            border: "2px solid rgb(108, 95, 196)",
        }
    }));

    const classes = useStyles();

    return (
        <div>
            <ExpandDiv>
                <IconButton>
                    <KeyboardArrowLeftRounded className={classes.keyboardArrow} />
                </IconButton>
            </ExpandDiv>

            <div id="mySidenav" className="sidenav">
                <Avatar className={classes.avatarIcon} />
                <Avatar className={classes.avatarIcon} />
                <Avatar className={classes.avatarIcon} />
                <Avatar className={classes.avatarIcon} />
                <Avatar className={classes.avatarIcon} />
                <Avatar className={classes.avatarIcon} />
                <Avatar className={classes.avatarIcon} />
                <Avatar className={classes.avatarIcon} />
                <Avatar className={classes.avatarIcon} />
            </div>
        </div>
    )
}

export default RightWidget

const ExpandDiv = styled.div`
    border: solid 1px white;
    border-radius: 50px;
    position: absolute;
    top: 55%;
    right: 20px;
    margin-left: 50px;
    background: white;
    padding: -5px;
`;
