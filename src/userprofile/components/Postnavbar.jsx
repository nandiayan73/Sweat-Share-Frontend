import React from 'react'
import { Link } from 'react-router-dom';
// import Grid from '@mui/material'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { colors } from '@mui/material';
function Postnavbar() {
    const space={
        minWidth:"90px",
        fontSize:12,
        padding:"10px",
       
    }
    return (
        <>
            <div className="nav-container">
                <Grid container   cols={3}>
                    <Grid size="grow" sx={space}>
                        <Link><i className="fa-sharp fa-solid fa-camera-retro"></i> POSTS</Link>
                    </Grid>
                    <Grid size="grow" sx={space}>
                        <Link><i className="fa-sharp-duotone fa-solid fa-clapperboard"></i> REELS</Link>
                    </Grid>
                    <Grid size="grow" sx={space}>
                        <Link><i className="fas fa-save"></i> SAVED</Link>
                    </Grid>
                    <Grid size="grow" sx={space}>
                        <Link><i className="fa-solid fa-tag"></i> TAGGED</Link>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Postnavbar
