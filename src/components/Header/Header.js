import React, { useState } from 'react'
import headerStyle from './Header.module.css'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsIcon from '@mui/icons-material/Settings';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LogoutIcon from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useParams } from 'react-router-dom';


const Header = () => {
    const [headerProfileExpandOpen, setHeaderProfileExpandOpen] = useState(false);

    const [serachTerm, setSerachTerm] = useState('');

    const handleSearch = (e) => {
        setSerachTerm(e.target.value);
    }

    return (
        <div className={headerStyle.headerMain}>
            <div className={headerStyle.headerContent}>
                <div className={headerStyle.MenuTogglerDiv}>
                    {/* <div className={headerStyle.hamBurger} ><MenuIcon /> </div> */}
                    <div className={headerStyle.headerClientLogo}>
                        <img src="https://res.cloudinary.com/da21yifxa/image/upload/v1702148433/Screenshot_2023-12-10_002116_e6v1jo.png" alt="" />
                    </div>
                </div>

                <div className={headerStyle.dashHeader} >
                    <h1>Dashboard</h1>
                </div>
                <div>

                </div>

            </div>
        </div >
    )
}

export default Header
