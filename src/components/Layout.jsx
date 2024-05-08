import React, { useState } from 'react';
import { Tabs, Tab, Drawer } from '@mui/material';
import HomeComponent from './pages/HomeComponent';
import SearchComponent from './pages/SearchComponent';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

const Layout = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Drawer variant="permanent">
        <Tabs orientation="vertical" value={selectedTab} onChange={handleTabChange}>
          <Tab icon={<HomeIcon />} />
          {/* <Tab icon={<HomeIcon />} /> */}
        </Tabs>
      </Drawer>
      <div className='main-container-div'>
        {selectedTab === 0 && <HomeComponent />}
        {selectedTab === 1 && <SearchComponent />}
      </div>
    </div>
  );
};

export default Layout;
