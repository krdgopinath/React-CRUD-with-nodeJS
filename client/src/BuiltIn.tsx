import React, { Fragment } from 'react'

const string="Hello World";
const UsersArray =['Gopinath', "Arun", "Kamal"];
const UsersObject=[
                     { name:"gopi", no:'123', dept:'CSE'}, 
                     { name:"Arun", no:'223', dept:'ECE'}, 
                     { name:"Karthik", no:'323', dept:'EEE'}
                  ];

const UsersObjectOfObject={
                     gopi:   {  no:'123', dept:'CSE'}, 
                     arun:   {  no:'223', dept:'ECE'}, 
                     karthik:{  no:'323', dept:'EEE'},   
}

const num=100000000;
const sal=1021.3332321;
const num1=10;
const BuiltIn = () => {
  return (
    <div>
        <h1>Built-in functions</h1>
        <h2>String Functions </h2>
        <p>Print the string : {string} </p>
        <p>Length of string : {string.length }   </p>
        <p>Upper case : { string.toUpperCase() } </p>
        <p>Lower case : { string.toLowerCase() } </p>
        <p>Find the given string : { string.toLowerCase().includes("world".toLowerCase()) ?"Found": "Not found " } </p>
        <p>Get portion of string : { string.substring(2,7)} </p>
        <p>Replace the string : { string.replace("World",'Woorld')} </p>
        <p>Repeat the string : { "*".repeat(4)} </p>
        <p>Starts with  {string.startsWith("Hello") ? "Yes": "No" } </p>
        <p>Ends with  {string.endsWith("Hello") ? "Yes": "No" } </p>
        <p>At Supports both postive & negative indexing (count from the end): { string.at(-1) }</p>  
        <p>At Supports both postive indexing : { string.charAt(4) }</p>
        <p>Find a character { string.indexOf("l")} </p>
        <p>Find last occurence of character { string.lastIndexOf("l")} </p>
        <p>Slice Supports negative indices (counts from the end). but substring does not support negative : {string.slice(3,5)} </p>
        <p>Includes with postion to search { "We are indians. We love my nation".includes("We",10)? "Yes":"No"}</p>
        <p>Email validation: {"krdgopinath@gmail.com.uks".match(/^[a-zA-Z_]+@[a-zA-Z_]+\.[a-zA-Z_]{2,3}(\.[a-zA-Z_]{2,3})?$/)? "Valid email": "Not valid email"}</p>
        <p>SSN Validation : { "123-142-1222".match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/)? "Valid SSN": "Not valid SSN"} </p>
        <p>Find first match and replace : {"Cat Cat Dog".replace(/Cat/,'Lion')}</p>
        <p>Find all matches and replace : {"Cat Cat Dog".replace(/Cat/g,'Lion')}</p>
        <p>Find all matches and replace irrespective of upper or lower case : {"Cat cat Dog".replace(/Cat/gi,'Lion')}</p>
        <p>Find all matches: {"Cat Cat Dog".match(/Cat/g)}</p>
        <p>Find all matches irrespective of upper or lower case : {"Cat cat Dog".match(/Cat/gi)}</p>
        <h2>Map functions</h2>
         <h3>Map Functions with Array  </h3>
         <p>{ UsersArray.length < 0 ? "No record in Array": UsersArray.map((user,index)=> {
                return (
                    <React.Fragment key={index}>
                        <b >{user}</b> <br />
                   </React.Fragment >
                )
         })} </p>

          <h3>Map Functions with Array of Objects </h3>
         <p>{ UsersObject.length === 0 ? "No record in Array": UsersObject.map((user,index)=> {
                return (
                    <React.Fragment key={index}>
                        <b >{user.name}  &gt; {user.no} &gt; {user.dept}`</b> <br />
                   </React.Fragment >
                )
         })} </p>

         <h3>Map Functions with Object of Objects </h3>
         { Object.entries(UsersObjectOfObject).map(([key,user],index)=>{
            return (
                <React.Fragment key={index}>
                    <b > {key} {user.no} &gt; {user.dept}`</b> <br />
                </React.Fragment >
            )
         })}

            <h3>Map Functions with Object keys </h3>
            { Object.keys(UsersObjectOfObject).map((key)=>
                {
                return <React.Fragment key={key}> <b>{key}</b> <br/></React.Fragment>
                }
            )}

            <h3>get the value by passing key in Object of object</h3>     
            <GetUsersByKey userKey="karthik" />

            <h3>Filter an array </h3>
            {
                UsersArray
                    .filter((user)=> {return user != 'Gopinath'})
                    .map((user,index)=> <React.Fragment key={index}><b >{user}</b><br/></React.Fragment>)
            }

            <h3>Filter an array of objects </h3>
            {
                UsersObject
                    .filter((user)=> { return !user.name.includes('gopi')} )
                    .map((user,index)=> <React.Fragment key={index}><b >{user.name} &gt; {user.dept}</b><br/></React.Fragment>)
            }

            <h3>Append an array </h3>
            {
                [...UsersArray,"Aravind"].map((user)=>{
                    return <><b>{user}</b><br/></>
                })
            }

            <h3>Update an array </h3>
            {updateUsers().map((user,index)=>{
                return <b key={index}>{user}</b>
            })}

            <h3>Delete an element in array</h3>
            {deleteUser().map((user,index)=>{
                return <b key={index}>{user}</b>
            })}

            <h3>Update an array of Object </h3>
            {
                updateUserObject().map((user,index)=>{
                    return <b key={index}  >{user.name} &gt; {user.dept} </b>
                })
            }

            <h3>Delete an array of Object </h3>
            {
                deleteUserObject().map((user,index)=>{
                    return <b key={index}  >{user.name} &gt; {user.dept} </b>
                })
            }    

            <h2>Number Functions</h2>
            <p>format the number in Indian rupee :  {num.toLocaleString('en-IN',{style:"currency", currency:"INR"})}</p> 
            <p>format the number in Indian rupee : {'\u20B9'}  {num.toLocaleString('en-IN')}</p>   
            <p>format the number in US Dolar :  ${num.toLocaleString('en-US')}</p>  
            <p>Indian salary: { sal.toFixed(5)}</p>
            <p>Indian salary: {sal.toPrecision(5)}</p>
            <p>Adding leading zeros { formatnumber(num1) } </p>
            <h2>Date functions</h2>
            <p>getTime() returns the number of milliseconds{new Date('2025-05-21').getTime()}</p>
            <p>Date compare : { new Date('2025-05-21').getTime() === new Date('2025-05-21').getTime() ? "yes": "no"}</p> 
            <p>Difference in days: { (new Date('2025-05-26')-new Date('2025-04-26'))/(1000 * 60 * 60 * 24)}</p>
            <p>Difference in hours: { (new Date('2025-05-26T10:00:00')-new Date('2025-05-26T12:00:00'))/(1000 * 60 * 60)}</p>
            <p>Difference in minutes: { (new Date('2025-05-26T10:00:00')-new Date('2025-05-26T12:00:00'))/(1000 * 60)}</p>
            
    </div>
  )
}
 
// adding zeros in the beginning
const formatnumber=(n)=>{
    return n.toString().padStart(3,'0');
}

//Update user object

const updateUserObject=()=> {
    const updatedList= UsersObject.map((user)=>{
        if(user.name=="gopi") {
            return {...user, dept:"IT"} }

        return user;
    })
    return updatedList;
}


//Delete user object

const deleteUserObject=()=> {
    const updatedList= UsersObject.filter((user)=> user.name!="gopi");
    return updatedList;
}

//Delete an element from user array
const deleteUser  = () => {
    const updatedUserslist=[...UsersArray.filter((user)=>user!=="Gopinath")];
   return updatedUserslist;
}


// update the user array

const updateUsers=()=>{
   const updatedUsers=[...UsersArray.filter((user)=>user!=="Gopinath"),"Arravind"];
   return updatedUsers;
}

// Get the users by passing Key
const GetUsersByKey = ( {userKey }) => {
  const user = UsersObjectOfObject[userKey];

  if (!user) return <p>User not found</p>;

  return (
    <div>
      <p>No: {user.no}</p>
      <p>Dept: {user.dept}</p>
    </div>
  );
};

 

export default BuiltIn
