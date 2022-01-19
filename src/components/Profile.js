import React, { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const Profile = () => {

    
    const [people,setPeople]=useState([])
    // const[id,setId]=useState(0)
    const[url,setUrl]=useState('https://localhost:44377/person?id=0')

    let { id } = useParams()

    let navigate = useNavigate()

    const editProfile =()=>{
        navigate(`/editProfile`)
    }

    const getPeople = ()=>{
        id=Number(id)
        setUrl(`https://localhost:44377/person?id=${id}`)
        fetch(url)
        .then(response => response.json())
        .then(data=>setPeople(data))
        console.log(people)
        console.log(id)
    // console.log(JSON.parse(people))
    
}

useEffect(()=>getPeople(),[url])

    return (
        <div>
              {people.map(person => 
              <div key={person.id}>
                    <p>First Name: {person.firstName}</p>
                    <p>Last Name: {person.lastName}</p>
                    <p>City: {person.city}</p>
                    <p>State: {person.state}</p>
                    <div style={{borderTop:'1px solid #5f656d',height:'1px',margin:'16px 0'}}/>  
              </div>     
                )}
                <button onClick={editProfile}>Edit</button>
        </div>
    )
              }

export default Profile
