import axios from 'axios'

export function registerUser(newUserDetails){
    let apiUrl = 'https://bus-boomer-backend.vercel.app/register'
    return axios.post(apiUrl,newUserDetails,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}
