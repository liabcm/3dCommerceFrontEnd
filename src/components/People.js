import React, { useState } from 'react'

const People = () => {
    
    const [people,setPeople]=useState([])
    const[id,setId]=useState(0)
    const[url,setUrl]=useState('https://localhost:44377/person?id=0')



    const getPeople = ()=>{
        setUrl(`https://localhost:44377/person?id=${id}`)
        fetch(url)
        .then(response => response.json())
        .then(data=>setPeople(data))
        console.log(people)
    // console.log(JSON.parse(people))
    
}

//JSON.parse(data))
    return (
        <div>
            <input type='number' value={id} onChange={(e)=>setId(e.target.value)}/>
            <button onClick={getPeople}>get people</button>
    
              {people.map(person => 
              <>
                    <p>First Name: {person.firstName}</p>
                    <p>Last Name: {person.lastName}</p>
                    <p>City: {person.city}</p>
                    <p>State: {person.state}</p>
                    <div style={{borderTop:'1px solid #5f656d',height:'1px',margin:'16px 0'}}/>             
              </>     
                )}
        </div>
    )
              }

export default People
