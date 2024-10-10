import React, { useState } from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Homepage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 4,
                mb: 4,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    border: '1px solid #ddd',
                    borderRadius: '50px',
                    padding: '5px 15px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    width: '500px',
                    backgroundColor: '#fff',
                }}
            >
                <TextField
                    variant="standard"
                    placeholder="Search transaction"
                    value={searchQuery}
                    onChange={handleSearch}
                    InputProps={{
                        disableUnderline: true,
                        sx: { paddingLeft: '10px', flex: 1 },
                    }}
                />
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Homepage;
