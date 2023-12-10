import React, { useEffect, useState } from 'react'
import navbarStyle from './Navbar.module.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate, useLocation } from 'react-router-dom';

import GridViewIcon from '@mui/icons-material/GridView';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [workSpacesDropOpen, setWorkSpacesDropOpen] = useState(false);

    const [url, setUrl] = useState([]);
    //   const { auth } = useAuth();
    const [planExpand, setPlanExpand] = useState(false)
    const handleNavigate = (url) => {

        navigate(url)
        setWorkSpacesDropOpen(false)
    }

    const handleNavItemClick = (navItem) => {
        // console.log(navItem)

        setWorkSpacesDropOpen(prev => !prev)
    }

    useEffect(() => {
        const urlArray = location.pathname.split("/");
        setUrl(urlArray)
    }, [location])

    const handleTabSelected = (tab) => {
        return url.includes(tab);
    }


    return (
        <div className={navbarStyle.navMain}>


            <List sx={{ padding: "0px" }} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>

                <ListItem disablePadding onClick={() => handleNavigate("dash")}>
                    <ListItemButton
                        selected={handleTabSelected('dash')}
                        sx={{
                            backgroundColor: handleTabSelected('dash') ? '#E3F5FF' : 'transparent',
                            borderRadius: "8px",
                            '&.Mui-selected': { 
                                backgroundColor: '#E3F5FF', 
                                '&:hover': {
                                    backgroundColor: '#E3F5FF', 
                                },

                            },
                        }}
                    >
                        <ListItemIcon style={{ all: "revert", marginRight: "12px" }}>
                            <GridViewIcon
                                sx={{
                                    borderRadius: '3px',
                                    color: handleTabSelected('dash') ? '#16469d' : '#fff',
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}

                            sx={{
                                color: handleTabSelected('dash') ? '#16469d' : '#fff',
                            }}
                        >
                            Dashboard

                        </ListItemText>

                    </ListItemButton>
                </ListItem>


                <ListItem disablePadding onClick={() => handleNavigate("mark")}>
                    <ListItemButton
                        selected={handleTabSelected('mark')}
                        sx={{
                            '&:focus': {
                                backgroundColor: '#E3F5FF',
                            },
                            backgroundColor: handleTabSelected('mark') ? '#E3F5FF' : 'transparent',

                            borderRadius: "8px"
                        }}
                    >
                        <ListItemIcon style={{ all: "revert", marginRight: "12px" }}>
                            <ListAltIcon
                                sx={{
                                    borderRadius: '3px',
                                    color: handleTabSelected('mark') ? '#16469D' : '#fff',
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}

                            sx={{
                                color: handleTabSelected('mark') ? '#16469D' : '#fff',
                            }}
                        >
                            Marksheet

                        </ListItemText>

                    </ListItemButton>
                </ListItem>


                <ListItem disablePadding onClick={() => handleNavigate("create")}>
                    <ListItemButton
                        selected={handleTabSelected('create')}
                        sx={{
                            '&:focus': {
                                backgroundColor: '#E3F5FF',
                            },
                            backgroundColor: handleTabSelected('create') ? '#E3F5FF' : 'transparent',

                            borderRadius: "8px"
                        }}
                    >
                        <ListItemIcon style={{ all: "revert", marginRight: "12px" }}>
                            <SaveAsIcon
                                sx={{
                                    borderRadius: '3px',
                                    color: handleTabSelected('create') ? '#16469D' : '#fff',
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}

                            sx={{
                                color: handleTabSelected('create') ? '#16469D' : '#fff',
                            }}
                        >
                            Create

                        </ListItemText>

                    </ListItemButton>
                </ListItem>

                
                <ListItem disablePadding onClick={() => handleNavigate("setting")}>
                    <ListItemButton
                        selected={handleTabSelected('setting')}
                        sx={{
                            '&:focus': {
                                backgroundColor: '#E3F5FF',
                            },
                            backgroundColor: handleTabSelected('setting') ? '#E3F5FF' : 'transparent',

                            borderRadius: "8px"
                        }}
                    >
                        <ListItemIcon style={{ all: "revert", marginRight: "12px" }}>
                            <SettingsIcon
                                sx={{
                                    borderRadius: '3px',
                                    color: handleTabSelected('setting') ? '#16469D' : '#fff',
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}

                            sx={{
                                color: handleTabSelected('setting') ? '#16469D' : '#fff',
                            }}
                        >
                            Setting

                        </ListItemText>

                    </ListItemButton>
                </ListItem>


                <ListItem disablePadding onClick={() => handleNavigate("logout")}>
                    <ListItemButton
                        selected={handleTabSelected('logout')}
                        sx={{
                            '&:focus': {
                                backgroundColor: '#E3F5FF',
                            },
                            backgroundColor: handleTabSelected('logout') ? '#E3F5FF' : 'transparent',

                            borderRadius: "8px"
                        }}
                    >
                        <ListItemIcon style={{ all: "revert", marginRight: "12px" }}>
                            <LogoutIcon
                                sx={{
                                    borderRadius: '3px',
                                    color: handleTabSelected('logout') ? '#16469D' : '#fff',
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}

                            sx={{
                                color: handleTabSelected('logout') ? '#16469D' : '#fff',
                            }}
                        >
                            Logout

                        </ListItemText>

                    </ListItemButton>
                </ListItem>



            </List>




        </div>
    )
}

export default Navbar
