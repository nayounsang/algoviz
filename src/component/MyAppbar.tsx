import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import HelpIcon from '@mui/icons-material/Help';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import {
    Toolbar,
    Typography,
    IconButton,
    AppBar,
    Divider,
    ListItemButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    List
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

interface proptype {
    title: string,
    style: Object,
}

const MyItem = ({ icon, text,onClick }) => {
    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClick}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    )
}

const MyAppbar = ({ title, style }: proptype) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const navigate = useNavigate();


    return (
        <div>
            <div style={style}>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="home"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <Drawer open={isOpen}
                onClose={toggleDrawer}
                direction='left'>
                <div style={{ height: '9vh' }}></div>
                <List>
                    <MyItem icon={<HomeIcon/>} text={'홈페이지'} onClick={()=>{navigate('/')}}/>
                    <Divider/>
                    <MyItem icon={<HelpIcon/>} text={'도움말'} onClick={()=>{navigate('/help')}}/>
                    <Divider/>
                    <MyItem icon={<ArrowForwardIosIcon/>} text={'무향그래프'} onClick={()=>{navigate('/udgraph')}}/>
                    <Divider/>
                    <MyItem icon={<ArrowForwardIosIcon/>} text={'방향그래프'} onClick={()=>{navigate('/dgraph')}}/>
                    <Divider/>
                    <MyItem icon={<CloseIcon/>} text={'Drawer닫기'} onClick={()=>{setIsOpen(false)}}/>
                </List>
            </Drawer>
        </div>
    )
}

export default MyAppbar;