import React from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { Container, Icon, Row } from 'react-materialize';
import { TableContainer } from '@mui/material';
import { DataArray } from '@mui/icons-material';

export default function Detail() {
    const [isOpen, setIsOpen] = useState(false);
    const [APIData, setAPIData] = useState([]);
    const { id } = useParams();
    const baseUrl = `https://6367b6a0f5f549f052daaa74.mockapi.io/data?id=${id}`
    useEffect(() => {
        fetch(baseUrl)
            .then(response => {
                if (response.ok) { return response; }
                else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText); error.response = response;
                    throw error;
                }
            },
                error => {
                    var errmess = new Error(error.message); throw errmess;
                })
            .then(response => response.json())
            .then(data => setAPIData(data))
            .catch(error => console.log(error.message));
    }, [])
    return (
        <div className='container2'>
            {APIData.slice(0, 1).map((data) => (
                <div className='product-card'>

                    <div className='product-tumb'>
                        <img src={data.img} />
                        
                    </div>
                    <div className='product-details'>
                        <h2 className='detail_name'>{data.title}</h2>
                        <p>View: {data.views}</p>
                        <h5 >Description: {data.description}</h5>
                        <p >Content: {data.content}</p>
                        <p>Atractive: {String(data.actractive)}</p>
                        <p>Status: {String(data.status)}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}