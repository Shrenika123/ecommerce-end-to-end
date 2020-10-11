import React, { useState } from 'react'
import { Link ,useHistory} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
// import {useState} from ''
import './Login.css'
import { auth } from '../../firebase'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
        <div className="login">
            <Link to="/">
                <HomeIcon className="image" />
            </Link>
            <span className="home">Home</span>
            <div>
                <form type="onSubmit" className="container">
                    <h3>SignIn</h3>
                    <strong className="vals">UserName:</strong>

                    <div>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                    </div>
                    <strong className="vals">Password:</strong>
                    <div>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit" onClick={SignIn} className="button1">Login</button>
                    </div>
                    <button onClick={Register} className="button1">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Login