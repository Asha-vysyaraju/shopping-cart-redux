import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"

import { useSelector } from "react-redux"
const Header = () => {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
    const navigate = useNavigate()
   const cartData=useSelector((state)=>state.CartReducer)
   console.log(cartData.cart)
    return (
        <ThemeProvider theme={darkTheme}>

            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit" sx={{ display: { xs: 'none', md: 'flex' } }}>

                        < ShoppingBagIcon />

                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                    >
                        SHOPPING CART
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
                        <Button color="inherit" onClick={() => navigate("/")}>Home</Button>

                        <Button color="inherit"> Contact</Button>
                        <Button color="inherit"> About Us</Button>

                    </Box>
                    <Button color="inherit" onClick={() => navigate("/cart")}>
                        <Badge badgeContent={cartData.cart.length} color="error">
                            <ShoppingCartIcon />
                        </Badge>

                    </Button>

                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header