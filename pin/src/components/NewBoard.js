import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { UserContext } from '../UserContext'
import "./styles.sass";
import AddToBoard from './AddToBoard';
import { useHistory } from 'react-router-dom'




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
    button: {
        color: '#500815',
        outline: 'none',
        fontSize: '30px',
        boxShadow: 'none',
        border: 'none',
        fontWeight: 'bold',
        fontFamily: '-apple - system',
        display: 'flex',
        justifyContent: 'center'
    }
    },
}));

export default function NewBoard() {
    const classes = useStyles();
    const context = useContext(UserContext)
    const [newBoardName, setNewBoardName] = useState('')
    const [newImg, setNewImg] = useState('')
    const history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault();
        context.createBoard(newBoardName, newImg);
        
    };



    return (
<React.Fragment>
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <div className="newForm">
            <h1 className='createText'>Create New Board </h1>
                <TextField id="standard-basic" label="Board Name" onChange={(e) => {setNewBoardName(e.target.value)}}/>
                <TextField id="standard-basic" label="main img link" onChange={(e) => { setNewImg(e.target.value) }}/>
                </div>
                <button className='newBoardButton' type='submit'>create board</button>

        </form>
        </React.Fragment>
    );
}

