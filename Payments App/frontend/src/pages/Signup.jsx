
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Heading from "../componentes/Heading";
import Miniheading from "../componentes/Miniheading";
import InputBox from "../componentes/InputBox";
import Bottom from "../componentes/Bottom";
import { Button } from "../componentes/Button";
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const navigate = useNavigate();
    
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    return (
        <div className="bg-gray-500 flex flex-col justify-center h-screen w-full items-center">
            
            <div className="w-96 bg-white flex flex-col justify-center m-2 p-2 rounded-lg">
                <Heading lable="Sign up" />
                <Miniheading lable="Enter your information to create an account" />
                <InputBox onChange={(e) => { setfirstname(e.target.value) }} label="First Name" placeholder="Enter your first name" />
                <InputBox onChange={ (e) => { setlastname(e.target.value)} }label="Last Name" placeholder="Enter your lastName" />
                <InputBox label="Email" onChange={ (e) => { setemail(e.target.value) }}placeholder="Enter your email" />
                <InputBox label="Password" onChange={(e) => { setpassword(e.target.value) }} placeholder="Enter your password" />
                <Button label="Sign up" onClick={
                    async() => {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                            username: email,
                            firstname: firstname,
                            lastname: lastname,
                            password: password
                        })
                        localStorage.setItem("token", response.data.token);
                        navigate("/dashboard");
                    }
                } />
                 <Bottom label="Already have an account? " link="Signin" val="Sign in" />
            </div>
        </div>
    )
}

export default Signup