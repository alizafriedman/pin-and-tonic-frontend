import React, {useEffect, useContext, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { UserContext } from '../UserContext';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '19ch',
        },
    },
}));

export default function AddToBoard(props) {
    const classes = useStyles();
    const context = useContext(UserContext)

    // useEffect(() => {
    //     context.loadBoards()
    // }, [])


    const handleChange = (event) => {
        if (!event.target.value) return;
context.addBoardIdToPin(event.target.value, props.pin.id);
    };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     context.addBoardIdToPin(test)
    // };

    if (!context.boards.length) return null;
    return (
  
        
             
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={null}
                        onChange={handleChange}
        >
            <MenuItem value={null}>select a board</MenuItem>
                    {context.boards.map((board) => {
                        return (

                                <MenuItem value={board.id} key={board.id}>{board.boardName}</MenuItem>
                           
                        )
                    })}
                    </Select>
                
                       
           
       
    );
}