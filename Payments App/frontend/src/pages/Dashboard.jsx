import React, { useEffect, useState } from "react";

import  Appbar  from "../componentes/Appbar";
import  Balance  from "../componentes/Balance";
import  Users  from "../componentes/User";
import axios from "axios";




const Dashboard = () => {

    const [b, setUsers] = useState(0);
    const [name, setName] = useState("m");
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res => {
            setUsers(res.data.balance)
        })

        axios.get("http://localhost:3000/api/v1/user/me", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res => {
            setName(res.data.user.firstname); // Set the username in the state
        })
    },[])
    
    return (
        <div className="mr-2 ml-2">
           <Appbar mo={name}/>
           <Balance value={b}/>
           <Users />
        </div>
    )
}
export default Dashboard