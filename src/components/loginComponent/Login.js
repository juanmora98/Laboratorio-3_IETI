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
        this.state = { mail: '', password: ''};
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmitChange = this.handleSubmit.bind(this);
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
                            <FormControl variant="outlined" required>
                                <InputLabel htmlFor="component-outlined">
                                    Correo electronico
                                </InputLabel>
                                <OutlinedInput id="mail" 
                                value={this.state.mail} 
                                onChange={this.handleMailChange} 
                                />
                            </FormControl>
                            <br/>
                            <br />
                            <FormControl variant="outlined" required>
                                <InputLabel htmlFor="component-outlined">
                                    Contraseña
                                </InputLabel>
                                <OutlinedInput id="password"
                                 value={this.state.password} 
                                 onChange={this.handlePasswordChange} 
                                />
                            </FormControl>
                            <br />
                            <br />
                            <Button variant="contained" 
                            className="button" 
                            onClick= {this.handleSubmit}
                            >
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


    handleMailChange(e){

        this.setState({
            mail: e.target.value
        });

    }

    handlePasswordChange(e) {

        this.setState({
            password: e.target.value
        });

    }

    componentDidMount() {
        if(localStorage.getItem('User') && localStorage.getItem('Password')){
            this.setState({
                mail: localStorage.getItem('User'),
                password: localStorage.getItem('Password')
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem('User', this.state.mail);
        localStorage.setItem('Password', this.state.password);
        window.location.href = "/user"
    }

}
