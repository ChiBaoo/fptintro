import React from 'react'
import { useEffect, useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material"
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
 
export default function Data() {
    const [APIData, setAPIData] = useState([]);
    const baseUrl = `https://6367b6a0f5f549f052daaa74.mockapi.io/data`
    useEffect(()=>{
        fetch(baseUrl)
    .then(response => {
    if (response.ok) {return response;}
    else {var error = new Error('Error ' + response.status + ': ' + response.statusText);  error.response = response;
    throw error;}
    },
    error => {var errmess = new Error(error.message);  throw errmess;
    })
     .then(response => response.json())
     .then(data => setAPIData(data))
     .catch(error => console.log(error.message));
    },[])
    return (
        <div className='player_info'>
        <Box sx={{ width: '90%' }} className='Boxx'>
            <Grid container rowSpacing={{ xs: 2, md: 3 }} columnSpacing={{ xs: 4, sm: 8, md: 10 }}>
            
            {APIData.map((data)=>(
                <Grid item xs={2} sm={4} md={4}>
                <div className='card'>
                    <img src={data.img} />
                    <h6>{data.title}</h6>
                    <p className='title'>{data.description}</p>
                    <Link to={`detail/${data.id}`}> 
                    <p className='players_button'><button>Detail</button></p>
                    </Link>
                </div>
                </Grid>
            ))}
            
            </Grid>
        </Box>
        </div>
    )

}