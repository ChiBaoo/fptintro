import { Button, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from 'react-materialize'; 
import Notification from "./Edit";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    TextField,
    Switch,
    Dialog,
    DialogTitle,
    DialogContent,
    FormControlLabel,
    DialogContentText,
    Alert,
    AlertTitle,
    DialogActions,
} from "@mui/material";
import { setDefaultEventParameters } from "firebase/analytics";

export default function Dashboard() {

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const baseURL = `https://6367b6a0f5f549f052daaa74.mockapi.io/data`;
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            content: "",
            img: "",
            status: false,
            views: 1,
            atractive: false,
        },

       
        onSubmit: (values) => {
            setOpen(true)
            fetch(baseURL, {
                method: "PUT",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "same-origin",
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => setOpen(true))
                .catch((error) => console.log(error.message));
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required("Required.")
                .min(2, "Must be 2 characters or more"),
            description: Yup.string()
                .required("Required.")
                .min(2, "Must be 2 characters or more"),
            content: Yup.string()
                .required("Required.")
                .min(2, "Must be 2 characters or more"),
            img: Yup.string()
                .required("Required.")
                .min(2, "Must be 2 characters or more"),

            views: Yup.number().integer()
                .required("Required.")
                .typeError("Please type a number."),

        }),
    });

    ////////////////////////////////////////////////////////////////////////////////////////////
    const [APIData, setAPIData] = useState([]);
    const[name, setName] = useState("");
    const[nation, setNation] = useState("");
    const[club, setClub] = useState("");
    const[cost, setCost] = useState("");
    const[info, setInfo] = useState("");
    const[clip, setClip] = useState("");
    const[img, setImg] = useState("");
    const[famous, setFamous] = useState(false);
    const [userId,setUserId]=useState(null)
    const baseUrl = `https://6367b6a0f5f549f052daaa74.mockapi.io/data`
    const [buttonPopup, setButtonPopup] = useState(false);

    function getUsers(){
        fetch(baseUrl).then((result) =>{
            result.json().then((resp)=>{
                setAPIData(resp)
                setName(resp[0].name)
                setNation(resp[0].nation)
                setClub(resp[0].club)
                setCost(resp[0].cost)
                setInfo(resp[0].info)
                setClip(resp[0].clip)
                setImg(resp[0].img)
                setFamous(resp[0].famous)
                setUserId(resp[0].id)
            })
        })
    }
    useEffect(()=>{
      getUsers();
    },[])

    function deleteUser(id){
        fetch(`https://6367b6a0f5f549f052daaa74.mockapi.io/data/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                getUsers()
            })
        })
    }
    
    function selectUser(id){
        console.warn("function called", APIData[id-1])
        let item= APIData[id-1]
        setName(item.name)
        setNation(item.nation)
        setClub(item.club)
        setCost(item.cost)
        setInfo(item.info)
        setClip(item.clip)
        setImg(item.img)
        setFamous(item.famous)
        setUserId(item.id)
    }
    function updateUser(){
        let item={name, nation, club, cost, info, clip, img, famous}
        console.warn("item", item)
        fetch(`https://6367b6a0f5f549f052daaa74.mockapi.io/data/${userId}`,{
            method:'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify(item)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                getUsers()
            })
        })
    }

    function buttonpop(){
        setButtonPopup(true)
    }
    function buttonclose(){
        setButtonPopup(false)
    }

    
    return(
        <div className="Dashboard_main">
            <div className="add_post">
            
            <h1>Dashboard DataBase</h1>
            
            <Typography className="Dashboard_add">
                <Link to='/add' style={{textDecoration:"none"}} className="Dashboard_adda">
                <Icon>add_circle_outline</Icon> Add data
                </Link>
            </Typography>
            
            </div>
            <div className="head_tab">
                <table>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Content</th>
                        <th>Img</th>
                        <th>Status</th>
                        <th>View</th>
                        <th>Actractive</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {APIData.map((data)=>(
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.description}</td>
                            <td>{data.content}</td>
                            <td><img src={data.img} /></td>
                            <td>{String(data.status)}</td>
                            <td>{data.views}</td>
                            <td>{String(data.actractive)}</td>
                            <td>
                            <button onClick={
                                function buttona(){
                                    selectUser(data.id);
                                    buttonpop();
                                }
                            }
                            style={{marginBottom:'10px'}}
                            >
                                <Icon left >edit</Icon>
                            </button>

                            <button onClick={() =>deleteUser(data.id)}>
                                <Icon left >remove</Icon>
                            </button>    
                            </td>  
                        </tr>
                    ))}
                    </tbody>
                </table>






            <Notification trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div>
            <div className='Add_info'>
            <form onSubmit={formik.handleSubmit} className='Add_info'>
            <TextField
                    margin="dense"
                    name="description"
                    label="Description"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                />
                {formik.errors.description && (
                    <Typography variant="caption" color="red">
                        {formik.errors.description}
                    </Typography>
                )}
                <TextField
                    margin="dense"
                    name="content"
                    label="Content"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.content}
                    onChange={formik.handleChange}
                />
                {formik.errors.content && (
                    <Typography variant="caption" color="red">
                        {formik.errors.content}
                    </Typography>
                )}
                <TextField
                    margin="dense"
                    name="img"
                    label="URL of image"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.img}
                    onChange={formik.handleChange}
                />
                {formik.errors.img && (
                    <Typography variant="caption" color="red">
                        {formik.errors.img}
                    </Typography>
                )}
                <TextField
                    margin="dense"
                    name="views"
                    label="Views"
                    type="number"
                    fullWidth
                    variant="standard"
                    value={formik.values.views}
                    onChange={formik.handleChange}
                />
                {formik.errors.views && (
                    <Typography variant="caption" color="red">
                        {formik.errors.views}
                    </Typography>
                )}
                
                
                <FormControlLabel
                    control={<Switch />}
                    label="Status"
                    name="status"
                    value={formik.values.status}
                    onChange={formik.handleChange}
                />
                <FormControlLabel
                    control={<Switch />}
                    label="Atractive"
                    name="atractive"
                    value={formik.values.atractive}
                    onChange={formik.handleChange}
                />
            <br />
            <Button variant="contained" size="medium"  className='Add_button' type="submit"
            onClick={updateUser}
            >
                <p className='Add_buttonc'>Edit</p>
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Congraturation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Alert severity="success">
                            <AlertTitle>Edit successful!</AlertTitle>
                        </Alert>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={
                            function buttonb(){
                                handleClose();
                                buttonclose();
                            }
                        }>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            </form>
        </div>
        </div> 
                </Notification>
            </div>
        </div>
    )
}