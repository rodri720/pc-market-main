import React, { useState } from 'react';
import { useColorMode, Box, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Center } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../images/logo.png';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';  // Asegúrate de tener esta importación
import Profile from '../Login/Profile';


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();  // Asegúrate de tener esta declaración

  const handleToggleColorMode = () => {
    console.log('Toggle color mode clicked');
    if (colorMode === 'light') {
      toggleColorMode('dark');
    } else {
      toggleColorMode('light');
    }
  };
  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };
  const handleSearch = () => {
    if (searchText) {
      navigate(`/home?search=${searchText}`);
    }
  };

  return (
    <div className="navbar" style={{ backgroundColor: colorMode === 'light' ? '#FFFFFF' : '#1A202C' }}>
     
      
      <div className="logo">
        <img src={logo} alt="logo" width={'150px'} height={'150px'} />
      </div>
     
      <h1 className="title"> Lenovo</h1>
      <div className="rightSection">
        <Box>
          <Button onClick={handleToggleColorMode} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Box>
        {isAuthenticated ? (
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
              _hover={{ bg: 'transparent' }}
              _expanded={{ bg: 'transparent' }}
              _focus={{ boxShadow: 'none' }}
            >
              {/* Asegúrate de tener el componente Profile disponible y importado */}
              <Profile size="sm" />
            </MenuButton>
            <MenuList alignItems={'center'} bg={colorMode === 'light' ? 'white' : '#1A202C'}>
              <br />
              <Center>
                {/* Asegúrate de tener el componente Profile disponible y importado */}
                <Profile size="xl" />
              </Center>
              <br />
              <Center>
                <p>PC_MARKET</p>
              </Center>
              <br />
              <MenuDivider />
              <MenuItem>pc-market@gmail.com</MenuItem>
              <MenuItem></MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Button
            variant="solid"
            bg="blue.500"
            color="white"
            _hover={{ bg: 'blue.600' }}
            onClick={loginWithRedirect}
          >
            Login
          </Button>
        )}
        <input
          type="text"
          placeholder="Buscar..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </div>
  );
}