import React, { useContext } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { UserContext } from '../UserContext';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '30ch',
        },
    },
}));

export default function AddToBoard(props) {
    const classes = useStyles();
    const context = useContext(UserContext)

    
    const handleChange = (event) => {
        if (!event.target.value) return;
        context.addBoardIdToPin(event.target.value, props.pin.id);
    };
   

    if (!context.boards.length) return null;
    return (
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={null}
            onChange={handleChange}>
    <MenuItem  value={null}>select a board</MenuItem>
        {context.boards.map((board) => {
     return (
         <MenuItem value={board.id} key={board.id}>{board.boardName}</MenuItem>
            )
        })}
        </Select>
    );
}