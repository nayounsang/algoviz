import React from "react";
import Appbar from "@mui/material/AppBar"
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { Toolbar } from "@mui/material";

interface proptype {
    title: string,
    className: string,
}

const MyAppbar = ({ title, className }: proptype) => {



    const goBack = () => {
        //goback
    };

    return (
        <div className={className}>
            <Appbar>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="home"
                        sx={{ mr: 2 }}
                        onClick={goBack}
                    >
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                </Toolbar>
            </Appbar>
        </div>
    )
}

export default MyAppbar;