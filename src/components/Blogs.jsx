import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import Card from './Card';


const Blogs = () => {
  // step 3 consume 
  const { loading, posts } = useContext(AppContext);

  return (
    <div className='flex flex-col gap-5 flex-1 overflow-y-auto'>
      {loading ?
        (<Spinner />)
        : (
          posts.length === 0 ?
            (<div>
              <p>No posts available</p>
            </div>)
            : (posts.map((post) => { return <Card post={post} key={post.id} />}))
          )
      }
    </div>
  )
}

export default Blogs
