import { useState } from 'react/cjs/react.development'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const EditProfile = () => {

    const [editProfile,setEditProfile]= useState({
        id:2,
        firstName:'',
        lastName:'',
        address:'',
        city:'',
        state:'',
        zipCode:'',
        email:'',
        phone:''
    })

    const navigate=useNavigate()

    const getEditProfile = ()=>{
        
        fetch(`https://localhost:44377/person?id=2`)
        .then(response => response.json())
        .then(data => setEditProfile(data[0]));

    }

    const updateProfile=()=>{
        fetch('https://localhost:44377/person',{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:(JSON.stringify(editProfile))
        })
        .then(response=>response.json)
        .then(data=>console.log(data))
        navigate(`/profile/${editProfile.id}`)
    }
      

    useEffect(()=>getEditProfile(),[])

    return (
        <div>
            <input type='text' value={editProfile.firstName} onChange={(e)=>setEditProfile(previousState=>{
                return{...previousState,firstName: e.target.value}
            })}/><br/>
            <input type='text' value={editProfile.lastName} onChange={(e)=>setEditProfile(previousState=>{
                return{...previousState,lastName: e.target.value}
            })}/><br/>
            <input type='text' value={editProfile.address} onChange={(e)=>setEditProfile(previousState=>{
                return{...previousState,address: e.target.value}
            })}/><br/>
            <input type='text' value={editProfile.city} onChange={(e)=>setEditProfile(previousState=>{
                return{...previousState,city: e.target.value}
            })}/><br/>
            <input type='text' value={editProfile.state} onChange={(e)=>setEditProfile(previousState=>{
                return{...previousState,state: e.target.value}
            })}/><br/>
            <input type='text' value={editProfile.zipCode} onChange={(e)=>setEditProfile(previousState=>{
                return{...previousState,zipCode: e.target.value}
            })}/><br/>
            <input type='text' value={editProfile.email} onChange={(e)=>setEditProfile(previousState=>{
                return{...previousState,email: e.target.value}
            })}/><br/>
            <input type='text' value={editProfile.phone} onChange={(e)=>setEditProfile(previousState=>{
                return{...previousState,phone: e.target.value}
            })}/><br/>
            <button onClick={()=>updateProfile()}>save</button>
        </div>
    )
}

export default EditProfile
