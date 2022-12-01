import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Switch, Typography, Alert, CardActions, CardContent, Card } from "@mui/material";
import { Container } from "@mui/system";
import { useFormik } from 'formik';
// import Notification from "./Notification";
import * as Yup from 'yup';
import { useEffect, useState } from "react";
import Notificationd from "./Notification";
export default function Contact() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      program: "",
      message: "",
      agree: false
    },

    onSubmit: (values) => {
      // alert(JSON.stringify(formik.values))
      setButtonPopup(true)
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Required.").min(5, "Must between 5-30 characters").max(30, "Must between 5-30 characters"),
      email: Yup.string().required("Required.").email("Invalid email"),
      phone: Yup.number().integer().typeError("Please enter a valid number"),
      program: Yup.string().typeError("Please select a program."),
      message: Yup.string().required("Required.").min(15, "The message must be 15 characters or more"),
      agree: Yup.boolean().oneOf([true], "The terms and conditions must be accepted.")
    }),

  });
  return (
    <div className="Contact_container">
      <Container className="Contact_containr">
        <div className="Conatact_pre">
          <h1>CONTACT US</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <TextField sx={{ m: 1, minWidth: 1100 }}
            label="User name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="textfield"
            fullWidth
          />
          <div className="Alertd">{formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}</div>
          <TextField sx={{ m: 1, minWidth: 1100 }}
            label="E-mail"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="textfield"
            fullWidth
          />
          <div className="Alertd">{formik.errors.email && (<Typography variant="caption" color="red">{formik.errors.email}</Typography>)}</div>
          <TextField sx={{ m: 1, minWidth: 1100 }}
            label="Phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            className="textfield"
            fullWidth
          />
          <div className="Alertd">{formik.errors.phone && (<Typography variant="caption" color="red">{formik.errors.phone}</Typography>)}</div>
          <FormControl sx={{ m: 1, minWidth: 1100 }} fullWidth>
            <InputLabel id="demo-simple-select-autowidth-label"
            ><div className="q123">Select facing issues</div>
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              label="Program of Stydy"
              name="program"
              value={formik.values.program}
              onChange={formik.handleChange}
              className="textfield"
            >

              <MenuItem value={"Broken or Missing Social Media Links"}>Broken or Missing Social Media Links</MenuItem>
              <MenuItem value={"Multiple 404 Errors and Redirects"}>Multiple 404 Errors and Redirects</MenuItem>
              <MenuItem value={"No HTTPS Found"}>No HTTPS Found</MenuItem>
              <MenuItem value={"Non-Specific Page Titles"}>Non-Specific Page Titles</MenuItem>
              <MenuItem value={"Slow Loading Time"}>Slow Loading Time</MenuItem>
              <MenuItem value={"Others"}>Others</MenuItem>
            </Select>

            <div className="Alertd">{formik.errors.program && (<Typography variant="caption" color="red">{formik.errors.program}</Typography>)}</div>
          </FormControl>

          <TextField sx={{ m: 1, minWidth: 1100 }}
            id="outlined-multiline-static"
            label="Message"
            multiline
            name='message'
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            className="textfield"
            fullWidth
          />
          <div className="Alertd">{formik.errors.message && (<Typography variant="caption" color="red">{formik.errors.message}</Typography>)}</div>

          <FormControlLabel control={<Switch />} label="Agree & terms of conditions." name='agree' sx={{ m: 1, minWidth: 1100 }}
            value={formik.values.agree} onClick={formik.handleChange} />
          <div className="Alertd">{formik.errors.agree && (<Typography variant="caption" color="red">{formik.errors.agree}</Typography>)}</div>

          <CardActions>
            <Button type='submit' sx={{ m: 1, minWidth: 1100,backgroundColor: 'green', width: '100%' }}
              variant="contained"
            >
              Send
            </Button>
          </CardActions>
          <Notificationd trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div className="popup1a">
              <img src="https://www.freeiconspng.com/thumbs/success-icon/success-icon-10.png" alt="check" />
              <h2>Submit Successful</h2>
              <p>We will contact you back as soon as possible !!</p>
            </div>
          </Notificationd>
        </form>

      </Container>
    </div>
  )
}