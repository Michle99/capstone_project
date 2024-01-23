import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { AppDispatch, useAppSelector } from '../redux/store';
import { useDispatch } from 'react-redux';

const Header: React.FC = () => {

  const dispatch: AppDispatch = useDispatch();
//   const userInfo = useAppSelector((state) => state.auth.user)
  useEffect(() => {
    // if ()
  })

  return (
    <AppBar position="static">
      <Toolbar sx={{ marginRight: 2 }}>
        <Button color="inherit" component={Link} to="/">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EcoPlastic App
          </Typography>
        </Button>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/submit">
          Form
        </Button>
        <Button color="inherit" component={Link} to="/list">
          Reports
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
