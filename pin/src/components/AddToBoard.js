import React, {useEffect, useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {UserContext} from '../UserContext';



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '19ch',
        },
    },
}));

export default function MultilineTextFields() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('');
    const [test, setTest] = useState('')

    const context = useContext(UserContext)

    // useEffect(() => {
    //     context.addBoardToPin()
    // }, [])
    // const currencies = [
    //     {
    //         value: 'USD',
    //         label: '$',
    //     },
    //     {
    //         value: 'EUR',
    //         label: '€',
    //     },
    //     {
    //         value: 'BTC',
    //         label: '฿',
    //     },
    //     {
    //         value: 'JPY',
    //         label: '¥',
    //     },
    // ];

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        context.addBoardIdToPin(test)
    };

    console.log(context.addBoardIdToPin(test))
    return (
        <React.Fragment>
            {/* <div className='test'> */}
               
                <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                        value={currency}
                        onChange={(e) => {setTest(e.target.value) }}
                    // onChange={handleChange}
                        // helperText="banana"
                    variant="outlined"
                        >
                            <MenuItem >3</MenuItem>
                        </TextField>
                        <button type='submit'>create</button>
            </div>
                </form>
           
        </React.Fragment>
    );
}