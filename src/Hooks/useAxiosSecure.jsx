import axios from 'axios';
import React, { useContext } from 'react';
import useAuth from './useAuth';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const authInfo =  useContext(AuthContext)
    const logoutUser = authInfo?.logoutUser 
    // const navigate = useNavigate()
    
    axiosSecure.interceptors.request.use(async(config)=>{
        const token = localStorage.getItem('token')
        if(token){
            config.headers.Authorization = token
        }
        return config;
    }, async(error) =>{
        return Promise.reject(error)
    })
    axiosSecure.interceptors.response.use((response)=>{
        return response
    }, async(error)=>{
        if(error.response && error.response.status === 401){
           logoutUser()
            .then(res => console.log(res.data))
           
        }
    })
    
    return axiosSecure;
};

export default useAxiosSecure;