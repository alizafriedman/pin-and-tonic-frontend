import React, { useContext, useEffect } from "react";
import { UserContext } from '../UserContext'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    pinContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
    },
    media: {
        height: "15",
        paddingTop: "36%",
    },
    title: {
        fontSize: "30px",
        fontWeight: "bold",
        color: "#500815",
        textAlign: "center",
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    avatar: {
        backgroundColor: "#500815",
    },
}));

export default function Splash(props) {
    const classes = useStyles();
    const context = useContext(UserContext)

    useEffect(() => {
        // const test = props.match.params.id;
        context.loadPins()
    }, [])
    // console.log(context.loadPins)
    // if (!context.pins.length) return null;
    return (
        <React.Fragment>
            <div className="pinHeader">
                <h2 className="pinHeader__text">blah</h2>
            </div>
            <div className={classes.pinContainer}>
                {context.pins.map((pin) => {
                    return (
                        <Card className={classes.root} key={pin.img}>
                            <CardHeader
                                avatar={
                                    <Avatar
                                        aria-label="Board"
                                        className={classes.avatar}
                                    ></Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                            />
                            <Typography
                                className={classes.title}
                                variant="body2"
                                component="h2"
                            >
                                {pin.pinName}
                            </Typography>
                            <CardMedia
                                component="img"
                                alt="test"
                                height="500"
                                width="450"
                                image={pin.imgUrl}

                            />
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>

                            </CardActions>

                        </Card>
                    );
                })}
            </div>
        )
            {/* <div className="homeButton">
                <Link className="newBoardButton" to='/boards/new'>add new board</Link>
            </div> */}
        </React.Fragment>
    );
}











