import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Posts from './Posts';
import Paginaition1 from './Pagination1'

const  Pagination=()=>{
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(false);
    const [currentPage,setCurrentpage]=useState(1);
    const [postPerPage,setPostperPage]=useState(10);

    useEffect(()=>{
   const fetchPost= async ()=>{
       setLoading(true);
       const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
       setPosts(res.data);
       setLoading(false);
   }   
    fetchPost();
    },[]
    );

    const indexOfLastpost = currentPage * postPerPage;
    const indexOfFirstpost = indexOfLastpost-postPerPage;
    const currentpost = posts.slice(indexOfFirstpost,indexOfLastpost);
console.log(posts)
    
    return (
        <div className ="container mt-5">
        <p className = "text-primary mb-3">my app</p>
        <Posts posts={currentpost} loading={loading}></Posts>
        <Paginaition1 postPerPage={postPerPage} totalPost={posts.length}></Paginaition1>
        </div>
    );
};
export default Pagination;