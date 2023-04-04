import React from 'react'

function NewsArticle({newsData}) {
  return (
    <div>
        <h2>List of News Articles</h2>
        {
            newsData.map((data)=>{
                return(
                    <div key={data.id}>
                        <h2>{data.id}  {data.title} | {data.category} </h2>
                       
                        <hr></hr>
                    </div>
                )
            })
        }
        </div>
  )
}

export default NewsArticle

export async function getServerSideProps(){
    const resp=await fetch(" http://localhost:4000/news");
    const data=await resp.json();
    console.log("Generate at runtime")
    return{
        props:{
            newsData:data
        }
    }
}