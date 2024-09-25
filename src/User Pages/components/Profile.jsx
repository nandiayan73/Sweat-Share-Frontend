import React from 'react'
import { Button } from '@mui/material'
import {Link}from 'react-router-dom'
import Highlights from './Highlights'

function Profile() {
    const effect={
        minWidth:"40px",
        height:"1.8rem", 
        padding:"1px 6px", 
        backgroundColor:'#e7e7e7', 
        boxShadow:"none",
        textTransform:"none",
        "&:hover":{
           boxShadow:"none",
           backgroundColor:"#BEBEBE",
           
        },
       
    }
    return (
        <>
            <div className="container">
                <div className="profile-picture">
                    <img src="" alt="" />
                    {/* <h1>hi</h1> */}
                </div>

                <div className="profile-details">
                    <div className="top-buttons">

                        <Button sx={{color:"black",textTransform:"none"}}>mdshamsuzzaman</Button>
                        <Button variant="contained" color='string' size='small' sx={effect}><a href="#" style={{color:"black",textDecoration:"none"}}>Edit profile</a></Button>
                        <Button variant="contained" color='string' size='small' sx={effect}><a href="#" style={{color:"black", textDecoration:"none" }}>View archive</a></Button>
                    </div>

                    <div className="activity-link">
                    <Link href="#" className='activity'><strong>235 </strong>posts</Link>
                    <Link href="#" className='activity'><strong>300 </strong>spotters</Link>
                    <Link href="#" className='activity'><strong>400 </strong>Spotting</Link>
                    </div>
                    <div className="profile-summary">
                        <strong>Md Shamsuzzaman</strong>
                        <div className="sub-summary">
                            Student <br />
                            Makaut <br />
                        </div>
                 </div>
                </div>
                 
                

               
            </div>

            
        </>
    )
}

export default Profile
