import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthConext';
import { Icon } from 'react-materialize'; 
import HouseIcon from '@mui/icons-material/House';
 const pages = ['Home', 'About', 'News'];

function ResponsiveAppBar() {
  const {user, logOut} = UserAuth();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleSignOut = async ()=>{
  try {
    await logOut()
  } catch (error) {
    console.log(error);
  }
}
  const [anchorElNav, setAnchorElNav] = React.useState(null);
   const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
    return(
      <div className='Navbar_Dd'>
        <AppBar position="static" xs={{backgroundColor: 'green'}}>
            <Container maxWidth="xl">
            <Toolbar disableGutters> 
            
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* Small navigation bar */}
              <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link to='/' style={{textDecoration:"none"}}>Home</Link></Typography>
              </MenuItem>
              <MenuItem >
                <Typography textAlign="center"><Link to='/about' style={{textDecoration:"none"}}>Top News</Link></Typography>
              </MenuItem>
              <MenuItem >
                <Typography textAlign="center"><Link to='/contact' style={{textDecoration:"none"}}>Contact</Link></Typography>
              </MenuItem>
            </Menu>
          </Box>


          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => ( */}
            <Typography className='Navopt1'>
              <Link to='/' style={{textDecoration:"none"}}
              
                // key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                className='Navopt'
              >
                
                <Icon left >home</Icon> Home
                
              </Link>
            </Typography>
            {/* // ))} */}
            <Typography className='Navopt1'>
              <Link to='/about' style={{textDecoration:"none"}}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block'}}
                className='Navopt'
              >
                <Icon left >info_outline</Icon> News
              
              </Link>
            </Typography>

            <Typography className='Navopt1'>
              <Link to='/contact' style={{textDecoration:"none"}}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                className='Navopt'
              >
                <Icon left >contacts</Icon> Contact
              
              </Link>
            </Typography>
          </Box>
          
          <Box sx={{ flexGrow: 0 }}>
              {user?.displayName?(
                <div>
                <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.email} src={user.photoURL} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
               <MenuItem  onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <Link to='/dashboard' style={{textDecoration:"none"}} className="c12d"><Icon left >dashboard</Icon>Dashboard</Link>
                </Typography>
                </MenuItem>

                <MenuItem>
                <Typography textAlign="center" onClick={handleSignOut} className="c12d"><Icon left >exit_to_app</Icon>Logout</Typography>
                </MenuItem>

            </Menu>
                </div>
              ):(
                <Link to='/login' style={{textDecoration:"none"}} >
                  <Button 
                sx={{ my: 2,  color: 'white', display: 'block' }} 
                >
                  Sign in
                  </Button>
                </Link>
               )}
          </Box>
            </Toolbar>
            </Container>
        </AppBar>
        </div>
    );
}
export default ResponsiveAppBar;