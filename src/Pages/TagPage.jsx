import React from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs'

const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
  return (
    <div className='flex flex-col items-center'>
      <Header />
      <div className='flex gap-2 w-[45%] pt-3 justify-start items-center '>

        <button className='px-2.5 py-1 border'
          onClick={() => navigate(-1)}>Back</button>

        <h2 className='font-bold'>Blogs Tagged <span>#{tag}</span></h2>
      </div>
      <Blogs />
      <Pagination />

    </div>
  )
}

export default TagPage
