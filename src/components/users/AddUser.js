

import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name:"",
        username: "",
        email:"",
        phone:"",
        website:""
    });
    const {name, username, email, phone, website} = user;
    const onInputChange = e => {
        setUser({...user,[e.target.name]: e.target.value})
    }
    const onSubmit = async e =>{
        e.preventDefault()
        await axios.post("http://localhost:3003/users", user);
       
        navigate('/');
    }
    return (
        <div className="container">
            <div className="w-45 ms-auto shadow p-5">
                <h2 className="text-center mb-4">Add a User</h2>
                <form onSubmit={e  => onSubmit(e)}>
                    <div className="form-group my-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange = {e => onInputChange(e)}/>
                    </div>
                    <div className="form-group my-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your UserName"
                            name="username"
                            value={username}
                            onChange = {e => onInputChange(e)}/>
                    </div>
                    <div className="form-group my-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Email Address"
                            name="email"
                            value={email}
                            onChange = {e => onInputChange(e)}/>
                    </div>
                    <div className="form-group my-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Phone Number"
                            name="phone"
                            value={phone}
                            onChange = {e => onInputChange(e)}/>
                    </div>
                    <div className="form-group my-3"> 
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Web Site Name"
                            name="website"
                            value={website}
                            onChange = {e => onInputChange(e)}/>
                    </div>
                    <div className="d-grid gap-10">
                        <button className="btn btn-primary" type="submit" value="Submit">Add User</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddUser;