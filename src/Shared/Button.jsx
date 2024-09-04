import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({text, path}) => {
    return (
        <Link to={path} className=" bg-[#F63E7B] hover:bg-[#e0356e] text-white px-7 rounded-md py-2"> {text} </Link>
    );
};

export default Button;