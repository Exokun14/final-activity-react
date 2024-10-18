import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Button, Modal } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '16px',
};

export default function AboutDeveloperComponent() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                About Me
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <DashboardIcon sx={{ mb: 3, fontSize: 80, color: 'primary.main' }} />
                        <Typography variant="h4" sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold', color: 'primary.dark' }}>
                            About Me
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'center', mb: 1, lineHeight: 1.5 }}>
                            I am a developer who specializes in game development.
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'center', mb: 3, lineHeight: 1.5 }}>
                            I enjoy playing League of Legends and other games. 
                        </Typography>
                    </Paper>
                </Box>
            </Modal>
        </>
    );
}
