
// import React from 'react';
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { auth } from '../../firebase';
import { Link ,useHistory} from 'react-router-dom';
import './Login1.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({

  check:{
    border:'1px solid rgb(153, 149, 149)',
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    height:'500px',
    // marginTop:'10px',
    // padding:'-20px',
    marginTop: theme.spacing(2)
  },  
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    height:'40%'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    marginTop: theme.spacing(1),

  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [error,setError]=userState
    const history=useHistory()

   

    
    const SignIn = (e) => {
        e.preventDefault()
    
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth)
            {
                history.push("/")
            }
        }).catch((e)=>{
            alert(e)

        })

    }

    const Register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth)
                history.push("/")
            }).catch(e => {
                alert(e)
            })
    }

  return (
    <Container className={classes.check} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in/Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e)=>setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            height="5px"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=>setPassword(e.target.value)}

          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={SignIn}
          >
            Sign In
          </Button>
          <Grid>
          <Typography item xs font-size="1px">
            Dont have an account?
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={Register}
          >
            Sign Up
          </Button>
          </Grid>

         
        </form>
      </div>
      
    </Container>
  );
}
