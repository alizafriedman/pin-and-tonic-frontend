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
import "./styles.sass";
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';
import clsx from 'clsx';
import AddToBoard from './AddToBoard';
import LocalBarIcon from '@material-ui/icons/LocalBar';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 318,
        marginTop: "45px",
        marginBottom: "45px",
        borderRadius: "30px"
    },
    pinContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
       
       
    },
    media: {
        height: "10",
        paddingTop: "36%",
    },
    title: {
        fontSize: "30px",
        // fontWeight: "900",
        fontStretch: "expanded",
        color: "#500815",
        textAlign: "center",
        fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,' +
            '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
        
        
    },
    select: {
        hover: 'none'
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
    const [expanded, setExpanded] = React.useState(false);
    const context = useContext(UserContext)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        // const test = props.match.params.id
        context.loadPins()

    }, [])
    // console.log(context.loadPins)
    // if (!context.pins.length) return null;
    return (
        <React.Fragment>
            <div className="pinHeader">
                <h2 className="pinHeader__text">suggested pins for you</h2>
            </div>
            <div className={classes.pinContainer}>
                {context.pins.map((pin) => {
                    return (
                        <Card className={classes.root} id="testing" key={pin.id}>
                            <CardHeader className="splashHeader" />
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
                                <IconButton aria-label="add to favorites" color='secondary'>
                                    <LocalBarIcon/>
                                </IconButton>
                                <IconButton aria-label="share" color='inherit'>
                                    <ShareIcon />
                                </IconButton>
                                <IconButton>
                                    <AddIcon />
                                    
                                </IconButton>
                                <AddToBoard className={classes.select} pin={pin} />

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
        
            {/* <div className="homeButton">
                <Link className="newBoardButton" to='/boards/new'>add new board</Link>
            </div> */}
        </React.Fragment>
    );
}











