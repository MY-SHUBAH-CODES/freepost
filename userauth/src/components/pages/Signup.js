import React, { useState } from "react";
import {
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    TextField,
    MenuItem,
    Select,
    FormGroup,
    Checkbox,
    Button
} from '@mui/material';

import { Grid } from "@mui/material";
 




const Signup = (props) => {
    const initialValues = {
        firstName: "",
        lastName: "",
        gender: "male",
        country: "Canada",
        hobby: ""
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            formValues,
            [name]: value,
        });
    };
 
    const [formValues, setFormValues] = useState(initialValues);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };
 
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid container alignItems="center" justify="center" direction="column" >
                    <h1>React material ui form - technostuf.com</h1>
                    <Grid item>
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="First name"
                            type="text"
                            value={formValues.firstName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            type="text"
                            value={formValues.lastName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item>
                        <FormControl>
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup
                                name="gender"
                                value={formValues.gender}
                                onChange={handleInputChange}
                                row
                            >
                                <FormControlLabel
                                    key="male"
                                    value="male"
                                    control={<Radio size="small" />}
                                    label="Male"
                                />
                                <FormControlLabel
                                    key="female"
                                    value="female"
                                    control={<Radio size="small" />}
                                    label="Female"
                                />
                                <FormControlLabel
                                    key="other"
                                    value="other"
                                    control={<Radio size="small" />}
                                    label="Other"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
 
                    <Grid item>
                        <FormControl>
                            <Select
                                name="country"
                                value={formValues.country}
                                onChange={handleInputChange}
                            >
                                <MenuItem key="canada" value="Canada">
                                    Canada
                                </MenuItem>
                                <MenuItem key="japan" value="Japan">
                                    Japan
                                </MenuItem>
                                <MenuItem key="germany " value="Germany">
                                    Germany
                                </MenuItem>
                                <MenuItem key="switzerland " value="Switzerland">
                                    Switzerland
                                </MenuItem>
                                <MenuItem key="australia " value="Australia">
                                    Australia
                                </MenuItem>
                                <MenuItem key="united_states " value="United States">
                                    United States
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
 
                    <Grid item>
                        <FormLabel>Hobby</FormLabel>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox name="hobby" defaultChecked />} label="Writing" />
                            <FormControlLabel control={<Checkbox name="hobby" />} label="Dance" />
                            <FormControlLabel control={<Checkbox name="hobby" />} label="Painting" />
                            <FormControlLabel control={<Checkbox name="hobby" />} label="Video Game" />
                        </FormGroup>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" type="submit" style={{
                            backgroundColor: "green",
                            margin: "5px"
                        }}>
                            Submit
                        </Button>
 
                    </Grid>
                </Grid>
            </form>
        </>
    );
}
export default Signup;