import React from "react";

const InputBox = ({ label, placeholder ,onChange}) => {
    return (
        <div className="flex flex-col">
            <div className="text-xl text-left text-black-500 font-medium ">
                {label}
            </div>
            <input onChange={onChange} className="border-2 border-gray-300 p-2 rounded-lg w-full p-2" placeholder={placeholder} />
        </div>
    );
};

export default InputBox;
