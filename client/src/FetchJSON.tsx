import React, { useEffect, useState} from 'react'

const FetchJSON = () => {

const [Users,setUsers]=useState([]);

// one way to use fetch
useEffect(()=>{
    fetch("http://localhost:5000/api/users")
        .then(response=> response.json())
        .then(data=> {
            setUsers(data);
        })
 },[]);

 //another way to use fetch with Async/Await

 useEffect(()=> {

    const fetchUsers=async ()=>{
        try{
        const response=await fetch("http://localhost:5000/api/users");
        if (!response.ok) throw new Error("Faild to fetch");
        const data=await response.json();
        setUsers(data);
        }
        catch(error)
        {
            console.log(error);
        }
    }   
    fetchUsers();
 })


  return (
    <div>
      <>
        What is Fetch in React?

Fetching data means requesting data from an API or server.

React does not have built-in HTTP clients, so we use:

Fetch API (native JavaScript)

Axios (popular library)

The most common place to fetch data in React is inside useEffect, so it happens after the component mounts
       <div>
        {
            Users.map((user)=> <p key={user.id}>{ user.name } - {user.email}   </p>)
        }
      </div>        </>
    </div>
  )
}

export default FetchJSON
