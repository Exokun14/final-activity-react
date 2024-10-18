// React imports
import { useState } from 'react';

// MUI imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SearchComponent({ SearchMovie }) {
    const [plot, setPlot] = useState('');
    const [movieName, setMovieName] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    const handlePlotChange = (event) => {
        setPlot(event.target.value);
    };

    const handleMovieNameChange = (event) => {
        setMovieName(event.target.value);
    };

    const handleReleaseDateChange = (event) => {
        setReleaseDate(event.target.value);
    };

    const handleSearch = () => {
        SearchMovie({ movieName, releaseDate, plot });
    };

    return (
        <Box
            className="search-component-container"
            component="form"
            sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'background.paper',
                padding: 2,
                borderRadius: 1,
                boxShadow: 3,
                flexWrap: 'wrap',
            }}
            noValidate
            autoComplete="off"
        >
            <Typography variant="h5" sx={{ marginRight: 2, color: 'white' }}>
                Movie Search
            </Typography>

            <TextField
                id="movie-name"
                label="Movie Title"
                variant="filled"
                sx={{ marginRight: 2, flex: 1 }}
                value={movieName} // Bind the value
                onChange={handleMovieNameChange} // Handle input change
            />
            <TextField
                id="movie-release-date"
                label="Movie Release Date (Year)"
                variant="filled"
                type="number" // Changed to number for better input validation
                sx={{ marginRight: 2, width: '120px' }}
                value={releaseDate} // Bind the value
                onChange={handleReleaseDateChange} // Handle input change
            />
            <FormControl sx={{ marginRight: 2, minWidth: 120 }}>
                <InputLabel id="select-plot">Plot</InputLabel>
                <Select
                    labelId="select-plot"
                    id="select-plot"
                    value={plot}
                    label="Plot"
                    onChange={handlePlotChange} // Handle plot change
                >
                    <MenuItem value={'short'}>Short</MenuItem>
                    <MenuItem value={'full'}>Full</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" onClick={handleSearch}>Search</Button>
        </Box>
    );
}
