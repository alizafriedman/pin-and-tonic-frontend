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
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
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

export default function BoardPins(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const context = useContext(UserContext)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        const boardId = props.match.params.id;
        context.getOneBoard(boardId)
    }, [])
    if (!context.singleBoard) return null;
    console.log(context.singleBoard)
    return (
        <React.Fragment>
            <div className="boardHeader">
            </div>
            <div className="boardCont">
                {context.singleBoard.Pins.map((pin) => {
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
                                title={pin.category}
                                subheader= {pin.createdAt}
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
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Directions:</Typography>
                                    <Typography paragraph>
                                      {pin.description}
                                     </Typography>
                                </CardContent>
                            </Collapse>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <CardActions disableSpacing>

                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded,
                                        })}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </IconButton>
                                </CardActions>
                            </CardActions>

                        </Card>
                    );
                })}
            </div>
        )
            <div className="boardButton">
                <Link className="newBoardButton" to='/boards/new'>add new board</Link>
            </div>
        </React.Fragment>
    );
}











