import React, { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import layoutStyle from './Layout.module.css';
import Navbar from '../../components/Navbar/Navbar';


const Layout = () => {
  const { client } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const [isSubsOpen, setIsSubsOpen] = useState(false);
  const [remainingDays, setRemainingDays] = useState(null);
  const [hasExpired, setHasExpired] = useState(false);


  const handleDrawerOpen = () => {
    setIsOpen(prev => !prev);
  };
  const handleSubsToggle = () => {
    setIsSubsOpen(prev => !prev);
  };


  return (
    <div className={layoutStyle.layoutMain}>
      <>
        <Header clientName={client} isOpen={isOpen} handleDrawerOpen={handleDrawerOpen} />
      </>
      <div className={`${layoutStyle.layoutPage} ${isOpen ? layoutStyle.open : ""}`}>
        <>
          <Navbar remainingDays={remainingDays} />
        </>
        <div className={layoutStyle.PageContainer}>
          <Outlet />
          
        </div>
      </div>

    </div>
  );
};

export default Layout;
