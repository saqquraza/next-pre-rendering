import React from "react";
import User from "@/components/user";
// import fs from 'fs';


function UserList({userList}) {

  return <div>
    <h2>UserList</h2>
    {
        userList.map((user)=>{
            return(
                <div key={user.id}>
                   <User user={user}/>
                </div>
            )
        })
    }
    </div>;
}

export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
//   fs.appendFile("components/output",JSON.stringify(data),(err)=>{
//     if(err) throw err;
//     console.log('Data has been appended to file.');
//   })

//   console.log(data);
  return {
    props: {
      userList: data,
    },
  };
}
