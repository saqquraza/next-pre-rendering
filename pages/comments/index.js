import React from 'react'

function Comments({comments}) {
  return (
    <div>
      <h2>Comments</h2>  
{
    comments.map((comment)=>{
        return(
            <div key={comment.id}>
                <h2>Name be : {comment.name}</h2>
                <h3>Email be : {comment.email}</h3>
                <h5>Comment be : {comment.body}</h5>
                <hr></hr>
            </div>
            
        )
    })
}
    </div>
  )
}

export default Comments

export async function getStaticProps(){
    const resp=await fetch("https://jsonplaceholder.typicode.com/comments")
    const data=await resp.json();
    // console.log(data)
    return{
        props:{
            comments:data.slice(0,7)
        }
    }
}