import React, { useState } from 'react'

const AddPerson = () => {
    const[addPerson, setAddPerson]= useState()
    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[address, setAddress] = useState('')
    const[city, setCity] = useState('')
    const[state, setState] = useState('')
    const[zipCode, setZipCode] = useState('')
    const[email, setEmail] = useState('')
    const[phone, setPhone] = useState('')
    const[isBuyer, setIsBuyer] = useState(0)
    const[isPrinter, setIsPrinter] = useState(0)
    const[isDesigner, setIsDesigner] = useState(0)

    const test=()=>{
        setAddPerson({firstName,lastName,address,city,state,zipCode,email,phone,isBuyer,isPrinter,isDesigner})
        console.log(JSON.stringify(addPerson))
        fetch('https://localhost:44377/person', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: (JSON.stringify(addPerson)),
        })
        .then(response => response.json())
        .then(data => {
        console.log( data);
        // setIsPrinter(0)
        // setIsBuyer(0)
        // setIsDesigner(0)
})
    }


    return (
        <div>
            <input type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/><br/>
            <input type='text' value={lastName} onChange={(e)=>setLastName(e.target.value)}/><br/>
            <input type='text' value={address} onChange={(e)=>setAddress(e.target.value)}/><br/>
            <input type='text' value={city} onChange={(e)=>setCity(e.target.value)}/><br/>
            <input type='text' value={state} onChange={(e)=>setState(e.target.value)}/><br/>
            <input type='text' value={zipCode} onChange={(e)=>setZipCode(e.target.value)}/><br/>
            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
            <input type='text' value={phone} onChange={(e)=>setPhone(e.target.value)}/><br/>
             {/* <input type='checkbox' checked={isBuyer===1?true:false} value={isBuyer} onChange={setIsBuyer(1)}/>
            <input type='checkbox' value={isPrinter} onChange={setIsPrinter(1)}/>
            <input type='checkbox' value={isDesigner} onChange={setIsDesigner(1)}/><br/>  */}
            <button onClick={test}>add person</button>
        </div>
    )
}

export default AddPerson
