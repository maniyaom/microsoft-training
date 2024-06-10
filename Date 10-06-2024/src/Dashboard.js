import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [nameOfTheUser, setNameOfTheUser] = useState("");
    const [emailOfTheUser, setEmailOfTheUser] = useState("");
    const [avatarOfTheUser, setAvatarOfTheUser] = useState("");
    const [userId, setUserId] = useState("");

    useEffect(() => {
        const updateProfile = async (id) => {
            try {
                const response = await axios.get(`https://reqres.in/api/users/${id}`);
                console.log(response.data.data);
                setNameOfTheUser(response.data.data.first_name + " " + response.data.data.last_name);
                setEmailOfTheUser(response.data.data.email);
                setAvatarOfTheUser(response.data.data.avatar);
            }
            catch (error) {
                setNameOfTheUser("Not Available");
                setEmailOfTheUser("Not Available");
                setAvatarOfTheUser("Not Available");
                alert("User not found !!")
            }
        }
        updateProfile(userId);
    }, [userId])
    return (
        <>
            <div style={{marginLeft: '50px'}}>
                <span className='text-value' style={{fontSize: '35px'}}>Select User:</span>
                <button className='btn' onClick={() => setUserId(1)}>1</button>
                <button className='btn' onClick={() => setUserId(2)}>2</button>
                <button className='btn' onClick={() => setUserId(3)}>3</button>
                <button className='btn' onClick={() => setUserId(100)}>100</button>

                <span className='text-value' style={{ fontSize: '32px' }}>Name : {nameOfTheUser}</span>
                <span className='text-value' style={{ fontSize: '32px' }}>Email : {emailOfTheUser}</span>

                <div className='profile-img'><img src={avatarOfTheUser} /></div>
            </div>
        </>
    );
}

export default Dashboard;