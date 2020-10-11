import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import SeachIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import {useStateValue} from '../../util/stateProvider'
import { auth } from '../../firebase';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Header() {
    const classes = useStyles();

   const handleAuth=()=>{
        auth.signOut()
    }

    const [{basket,user},dispatch]=useStateValue()
    return (

        <nav className="header">
            {/* image logo*/}
            <Button style={{color:"white"}}>
                <MenuIcon className="home-icon" style={{color:"black",backgroundColor:"black"}}/>
            </Button>

            {/* serach bar and icon*/}

            <div className="home">
                
                <Link to="/" className="header_link">
                    <div className="home">
                <HomeIcon style={{color:"white"}}/>
                    {/* <img className="header-icon" src="https://previews.123rf.com/images/tynyuk/tynyuk1701/tynyuk170100268/69882776-happy-family-with-shopping-father-mother-son-and-daughter-are-holding-bags-and-gifts-big-sale-vector.jpg" /> */}
                    <span className="header-line-two">Shop-On</span>
                    </div>
                </Link>
            </div>
            <div className="header-search">
                <input className="search" />
                <SeachIcon type="button" className="search-icon" />
            </div>
            <div className="header_nav">
                <Link to={!user?"/login":"/"} className="header_link">
                    <div className="header-option" onClick={handleAuth}>

                        <span className="header-line-one">Hi,{user?user.email:"Guest"}</span>
                        <span className="header-line-two">{user?"Sign Out":"Sign In"}</span>
                    </div>
                    {/* Accounts and links*/}
                </Link>
                <Link to="/orders" className="header_link">
                    <div className="header-option">
                        <span className="header-line-one">Return</span>
                        <span className="header-line-two">& Order</span>
                    </div>

                    {/* Accounts and links*/}
                </Link>

                <Link to="/cart" className="header_link">
                    <div >
                        <ShoppingCartIcon />
                        <span className="header-line-two">{basket?.length}</span>
                    </div>

                    {/* Accounts and links*/}
                </Link>
                {/* cart and count*/}
            </div>


        </nav>

    )
}

export default Header
