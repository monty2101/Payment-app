import axios from "axios";
import React, { useEffect, useState } from "react";

const Appbar = ({mo}) => {
   
    return (
        <div className="shadow h-14 flex justify-between">
            <div className="flex flex-col justify-center h-full ml-4">
                PayTM App
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center h-full mr-4">
                    {mo}
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {mo[0].toUpperCase()}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Appbar;
