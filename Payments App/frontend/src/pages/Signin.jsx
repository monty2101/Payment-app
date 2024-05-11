// write a code for react sigin page

// signin card which have input box for username and password and the submit button

import React ,{ useEffect} from "react";
import Heading from "../componentes/Heading";
import Miniheading from "../componentes/Miniheading";
import InputBox from "../componentes/InputBox";
import Bottom from "../componentes/Bottom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signin = () => {

    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/me", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => {
            if (res.data.user) {
                navigate("/dashboard");
            }
        })
    },[])
    return (
        <div className="bg-gray-500 flex flex-col justify-center h-screen w-full items-center">
            
            <div className="w-96 bg-white flex flex-col justify-center m-2 p-2 rounded-lg">
                <Heading lable="Sign in" />
                <Miniheading lable="Enter your credentials to access your account" />

                <InputBox label="Email" placeholder="Enter your Email" />
                <InputBox label="Password" placeholder="Enter your password" />

                <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-1/3 self-center m-2">Sign in</button>
                <Bottom label="Don't have an account? " link="Signup" val="Sign up" />
            </div>
        </div>
    )
}

export default Signin