import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CircularProgress from '@mui/material/CircularProgress';

export default function DisplayComponent({ movie, isLoading, error }) {
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: 4 }}>
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: 4 }}>
        <Paper elevation={3} sx={{ 
          p: 4, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          width: '90%',      
          height: '90%',     
          borderRadius: '16px',
          boxShadow: 4,
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <DashboardIcon sx={{ mb: 2, fontSize: 80, color: 'error.main' }} />
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 2, color: 'error.main' }}>
            Error
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            {error}
          </Typography>
        </Paper>
      </Box>
    );
  }

  if (!movie) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: 4 }}>
        <Paper elevation={3} sx={{ 
          p: 4, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          width: '90%',      
          height: '90%',     
          borderRadius: '16px',
          boxShadow: 4,
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <DashboardIcon sx={{ mb: 2, fontSize: 80 }} />
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 2 }}>
            No Movie Selected
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Please search for a movie to see the details.
          </Typography>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', padding: 4 }}>
      <Paper elevation={3} sx={{ 
        p: 4, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '90%',      
        height: 'auto',
        maxHeight: '90%',
        borderRadius: '16px',
        boxShadow: 4,
        overflow: 'auto',
      }}>
        <DashboardIcon sx={{ mb: 2, fontSize: 80 }} />
        <img 
          src={movie.Poster}
          alt="Movie Poster"
          style={{ 
            width: '100%', 
            maxWidth: '400px',  
            height: 'auto',
            objectFit: 'cover', 
            borderRadius: '8px', 
            marginBottom: '16px' 
          }} 
        />
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          {movie.Title}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          {movie.Plot}
        </Typography>
      </Paper>
    </Box>
  );
}
