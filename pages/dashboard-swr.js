import React from 'react'
import useSWR from 'swr'
const fetcher=async ()=>{
    const resp=await fetch('http://localhost:4000/dashboard')
    const data=await resp.json()
    return data 
}

function DashboardSWR() {
   const {data, error}= useSWR('dashboard',fetcher )

   if(error)return "An error has occured"
   if(!data) return "loading..."
   return (
    <div>
        <h2>Post be : {dataDashboard.posts}| Like be : {dataDashboard.likes}</h2>
        <p>follower be : {dataDashboard.follower}| Following be : {dataDashboard.following}</p>
    </div>
  )
}

export default DashboardSWR