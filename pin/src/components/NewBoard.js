import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { UserContext } from '../UserContext'
import "./styles.sass";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            display: "flex",
            justifyContent: "spaceAround",
            flexDirection: "column",
            marginLeft: "600px",
            width: '30ch',
            color: "#500815",
            marginTop: "150px",
        },
    },
}));

export default function NewBoard() {
    const classes = useStyles();
    const context = useContext(UserContext)
    const [newBoardName, setNewBoardName] = useState('')
    const [newImg, setNewImg] = useState('')
console.log(newBoardName, newImg)


    const handleSubmit = async (e) => {
        e.preventDefault();
        context.createBoard(newBoardName, newImg)
    };

    return (

        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <div className="newForm">
            <h1 className='createText'>Create New Board </h1>
                <TextField id="standard-basic" label="Board Name" onChange={(e) => {setNewBoardName(e.target.value)}}/>
                <TextField id="standard-basic" label="main img link" onChange={(e) => { setNewImg(e.target.value) }}/>
            </div>
            <button type='submit'>create</button>
        </form>
   
    );
}

