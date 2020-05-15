import React, { useContext, useEffect } from "react";
import {UserContext} from '../UserContext'
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

export default function Boards() {
    const classes = useStyles();
    const context = useContext(UserContext)

    useEffect(() => {
        context.loadBoards()
    }, [])

    // if (!context.boards.length) return null
    return (
      <React.Fragment>
        <div className="boardHeader">
          <h2 className="boardHeader__text">My Boards</h2>
        </div>
        <div className="boardCont">
          {context.boards.map((board) => {
            return (
              <Card className={classes.root} key={board.img}>
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
                  {board.boardName}
                </Typography>
                <CardMedia
                  component="img"
                  alt="test"
                  height="500"
                  width="450"
                  image={board.img}

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
        <div className="boardButton">
          <Link className="newBoardButton" to='/boards/new'>add new board</Link>
        </div>
      </React.Fragment>
    );
}











