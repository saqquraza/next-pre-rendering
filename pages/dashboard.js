import React ,{useEffect,useState}from 'react'

function Dashboard() {
const[isLoading,setIsLoading]=useState(true)
const[dataDashboard,setDataDashboard]=useState('')

const fetchData=async()=>{
    const resp=await fetch('http://localhost:4000/dashboard')
    const data=await resp.json();
    setDataDashboard(data);
    setIsLoading(false)
}
        useEffect(()=>{
            fetchData();
        },[])
// console.log(dataDashboard)
if(isLoading){
    return<h2>Loading ...</h2>
}
  return (
    <div>
        <h2>Post be : {dataDashboard.posts}| Like be : {dataDashboard.likes}</h2>
        <p>follower be : {dataDashboard.follower}| Following be : {dataDashboard.following}</p>
    </div>
  )
}

export default Dashboard