import React from 'react'

function ArticleListCategory({article,category}) {
  return (
    <div>
        <h2>showing news for category <i> {category}</i></h2>

        {
            article.map((data)=>{
                return(
                    <div key={data.id}>
                        <h2>{data.id} {data.title}</h2>
                        <p>{data.description}</p>
                        <hr/>
                        </div>
                )
            })
        }
    </div>
  )
}

export default ArticleListCategory

export async function getServerSideProps(context){
    const {params , req , res, query}=context
    // console.log(query);
    // console.log(req.headers.cookie)
    // res.setHeader('Set-Cookie',['name=Aman'])
    const {category}=params
    const resp=await fetch(`http://localhost:4000/news?category=${category}`)
    const data=await resp.json();
    console.log("Generate at runtime")
    return {
        props:{
            article:data,
            category
        }
    }
}