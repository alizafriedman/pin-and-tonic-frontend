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
import CreateIcon from '@material-ui/icons/Create';
import { CardActionArea } from '@material-ui/core'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 318,
//     marginTop: "45px",
//     marginBottom: "45px",
//     borderRadius: "30px"
//   },
//   boardCont: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//   },
//    media: {
//     height: "10",
//     paddingTop: "36%",
//   },
//   title: {
//     fontSize: "20px",
//     fontWeight: "bold",
//     color: "#500815",
//     textAlign: "center",
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: "rotate(180deg)",
//   },
//   avatar: {
//     backgroundColor: "#500815",
//   },
// }));
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));


export default function Boards() {
    const classes = useStyles();
  const context = useContext(UserContext)
 //load boards with grid of pins displayed inside square -- use with useeffect??
  
  // const tileData = [
  //   {
  //     img: image,
  //     title: 'Image',
  //     author: 'author',
  //     cols: 2,
  //   },
  // ];


    useEffect(() => {
      context.loadBoards()
    }, [])

    // if (!context.boards.length) return null
    return (
      <React.Fragment>
        <div className="boardButtonIcon">
          <IconButton>
            <CreateIcon />
          <Link className="newBoardButton" to='/boards/new'>add a new board</Link>
          </IconButton>
        </div>
        <div className="boardHeader">
          <h2 className="boardHeader__text">My Boards</h2>
        </div>
        <div className={classes.boardCont}>
          {context.boards.map((board) => {
            return (
              <Link to={`/boards/${board.id}`} style={{ textDecoration: "none" }}>
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                  {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                      <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                  ))}
                </GridList>
              {/* <Card className={classes.root} key={board.id}>
                <CardActionArea >
                <CardHeader
                  
                  // action={
                  //   <IconButton aria-label="settings">
                  //     <MoreVertIcon />
                  //   </IconButton>
                  // }
                />
                <Typography
                  className={classes.title}
                  variant="body2"
                  component="h2"
                >
                      {`Board: ${ board.boardName}`}
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
                  </CardActionArea>
                </Card> */}
              </Link>
            );
          })}
        </div>
        )
       
      </React.Fragment>
    );
}











