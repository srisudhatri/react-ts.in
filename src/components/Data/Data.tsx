import React,{useState,useEffect} from "react"
import axios from "axios";


const API=`https://jsonplaceholder.typicode.com`;
const id=1;

export const Data=(props:any)=>{
    const [posts,setPosts]= useState<any[]>([]);
    
    
    
//Using Promises:

    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res=>{
    //         console.log(res)
    //         setPosts(res.data)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // },[]);


    // //Using async await
    // const getApiData= async ()=>{
    //   const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //   setPosts(res.data);
    //   console.log(res.data);
    // }

    // useEffect(()=>{
    //     getApiData()

    // },[]);


    //Using async await
    const getApiData= async (url:any)=>{
        const res = await axios.get(url);
        setPosts(res.data);
        console.log(res,'data');
        console.log(posts)
        console.log(props,'props')
      }
  
      useEffect(()=>{
          getApiData(`${API}/users`)
  
      },[]);

  

      

    return (
        <div>

            {/* {posts.map((post)=>{
            const { id,name,username} = post;
            return (
                <div key={id}>
                   
                    <p>{name}</p>
                    <p>{username}</p>
                   
                </div>
            
            )
           })}  */}

           {/* {posts.map(post=>(
            <li key={post.id}>{post.username}</li>
           ))} */}

        <h1>
        {posts[0]?.username}<br></br>
        {posts[0]?.name}<br></br>
        {posts[0]?.email}
        </h1>

        </div>
    )
}