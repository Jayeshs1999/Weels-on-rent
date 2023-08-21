import { Alert, Box, Button, Snackbar, SnackbarContent } from '@mui/material';
import { useState } from 'react';

interface SnackbarProps {
    severity?: 'success' | 'warning' | 'info' | 'error';
    position?: {
        vertical: 'top' | 'bottom',
        horizontal: 'center' | 'left' | 'right'
    }
    snackbarMsg: string;
    onClose: (event:any) => void;
  
}

/**
 * Primary UI component for user interaction
 */
export const ZSnackbar = ({
    position ={vertical: 'top', horizontal: 'right'},
    severity = 'success',
    snackbarMsg,
    onClose
}: SnackbarProps) => {
    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(true);
      };
    
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
        return;
    }
    setOpen(false);
    onClose(event)
    };
  return (
    <Box>
        <Snackbar open={open} autoHideDuration={2000} anchorOrigin={position} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                {snackbarMsg}
            </Alert>
        </Snackbar>
    </Box>
    
  );
};
