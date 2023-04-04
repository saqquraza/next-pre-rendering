import React from 'react'

function UserCompany({user}) {
  return (
    <div>
       <h2>UserCompany</h2> 
       {
        user.map((userCompany)=>{
            return(
                <div key={userCompany.id}>
                <h2>Company Name : {userCompany.company.name}</h2>
               
                </div>
            )
        })
       }
        </div>
  )
}

export default UserCompany

export async function getStaticProps(){
    const resp=await fetch('https://jsonplaceholder.typicode.com/users')
    const data =await resp.json();
    return{
        props:{
            user:data
        }
    }
}