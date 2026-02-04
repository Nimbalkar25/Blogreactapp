import React, { useContext, useEffect, useState } from 'react'

import Spinner from '../components/Spinner'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import Card from '../components/Card';

const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const { loading, setLoading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs(blogId) {
    setLoading(true);
    let url = `https://cors-anywhere.herokuapp.com/${newBaseUrl}/get-blog?blogId=${blogId}`
    try {
      const result = await fetch(url);
      const data = await result.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);

    } catch (error) {
      console.log("Error came something", error);
      setBlog(null);
      setRelatedBlogs([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    // if (!blogId) return;
    if(blogId){
      fetchRelatedBlogs(blogId)
    }

    // fetchRelatedBlogs(blogId);
  }, [location.pathname])


  return (
    <div className='flex flex-col items-center'>
      <Header/>

      <div className='flex gap-2 w-[45%] pt-3 justify-start items-center '>
        <button className='px-2.5 py-1 border' 
        onClick={()=> navigate(-1)}>
          Back
        </button>
      </div>

      {
        loading ? 
        (<Spinner/>) : 
        blog ? 
        (<div className='flex flex-col '>
          <Card post={blog} key={blog.id}/>
          <h2 className='font-bold px-[17rem] mt-5 text-2xl'> Related Blogs</h2>

          {
            relatedBlogs.map((post)=>(  // for () in map return not need is auto happen and for {} we need return explicitly
              <div key={post.id} >
                <Card post={post} />
              </div>
            ))
          }
        </div>) : 
        (<p>No Blog Found</p>)
      }

    </div>
  )
}

export default BlogPage
