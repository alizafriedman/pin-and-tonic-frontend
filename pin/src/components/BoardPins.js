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
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import ImageAvatars from './Avatar';





const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 315,
        // maxHeight: 400,
        marginTop: "45px",
        marginBottom: "45px",
        borderRadius: "30px",
        // color: "#500815",
        // fontSize: "5px"
    },
    media: {
        height: "15",
        paddingTop: "36%",
    },
    text: {
        color: "#500815",
        fontSize: "5px"
    },
    title: {
        fontSize: "30px",
        fontWeight: "bold",
        color: "#500815",
        textAlign: "center",
    },
    boardCont: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",


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
        color: "#500815",

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
   
    return (
        <React.Fragment>
            <div className="boardButtonIcon">
                <IconButton>
                    <CreateIcon />
                    <Link className="newBoardButton" to='/boards/new'>add a new board</Link>
                </IconButton>
            </div>
            <div className="boardHeader">
            </div>
            <div className={classes.boardCont}>
                {context.singleBoard.Pins.map((pin) => {
                    return (
                        <Card className={classes.root} key={pin.img}>
                            <CardHeader className={classes.text}
                                
                                action={
                                    <IconButton
                                        aria-label="Board"
                                        className={classes.avatar}
                                    >
                                        <LocalBarIcon />
                                    </IconButton>
                                }
                                // action={
                                //     <IconButton aria-label="settings">
                                //         <LocalBarIcon />
                                //     </IconButton>
                                // }
                                title={pin.category}
                                subheader= {pin.createdAt}
                            />
                        





                            <Typography
                                className={classes.title}
                                variant="body2"
                                component="h5"
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
                                <IconButton aria-label="add to favorites" color='secondary'>
                                    <LocalBarIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton>
                                    <AddIcon />
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
        </React.Fragment>
    );
}











