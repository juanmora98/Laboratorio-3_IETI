import React from 'react';
import './Login.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { Avatar, Typography, FormControl, InputLabel, OutlinedInput, Button, Grid} from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

const user = '/user';

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { userame: '', password: ''};
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }


    render(){
        return(
            <React.Fragment>
                <CssBaseline />
                <Grid container direction="row" justify="center" alignItems="stretch">
                    <Grid item sm={12} md={6}>
                        <Paper>
                            <br />
                            <br />
                            <Typography align='center' variant='h3'>
                                Task Planner
                            </Typography>
                            <br/>
                            <Grid container justify="center" alignItems="center">
                                <Avatar variant='circle' className="Avatar">
                                    <AccountCircleRoundedIcon className='icon' />
                                </Avatar>
                            </Grid>
                            <br />
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="component-outlined">
                                    Nombre de usuario
                                </InputLabel>
                                <OutlinedInput id="username" 
                                value={this.props.userame} 
                                onChange={this.handleUserNameChange} 
                                />
                            </FormControl>
                            <br/>
                            <br />
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="component-outlined">
                                    Contraseña
                                </InputLabel>
                                <OutlinedInput id="password"
                                 value={this.props.password} 
                                 onChange={this.handlePasswordChange} 
                                />
                            </FormControl>
                            <br />
                            <br />
                            <Button variant="contained" className="button" href={user}>
                                Login
                            </Button>
                            <br />
                            <br />
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }


    handleUserNameChange(e){

        this.setState({
            userame: e.target.value
        });

    }

    handlePasswordChange(e) {

        this.setState({
            password: e.target.value
        });

    }



}
