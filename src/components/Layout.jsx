// src/Layout.js
import React, { useState } from 'react';
import { Tabs, Tab, Drawer } from '@mui/material';
import HomeComponent from './pages/HomeComponent';
import SearchComponent from './pages/SearchComponent';

const Layout = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Drawer variant="permanent">
        <Tabs orientation="vertical" value={selectedTab} onChange={handleTabChange}>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
        </Tabs>
      </Drawer>
      <div style={{ marginLeft: '151px', marginRight: '60px' }}>
        {selectedTab === 0 && <HomeComponent />}
        {selectedTab === 1 && <SearchComponent />}
      </div>
    </div>
  );
};

export default Layout;
