import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Box, Container } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import Home from './pages/Home';
import './styles/App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}>
        <AppBar 
          position="static" 
          elevation={0}
          sx={{ 
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <Toolbar>
            <CheckCircleOutline sx={{ mr: 2, fontSize: 32 }} />
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ 
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '0.5px',
              }}
            >
              TaskFlow
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="xl" sx={{ py: 4 }}>
          <Home />
        </Container>
      </Box>
    </>
  );
}

export default App;