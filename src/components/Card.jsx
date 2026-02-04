import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({ post }) => {
  return (
    <div className=' w-full flex justify-center'>
      <div className='w-[45%] pt-4 flex flex-col gap-3' >
        <div>
          <NavLink to={`/blog/${post.id}`}>
          
            <span className='font-bold text-[1.15rem]'>
              {post.title}
            </span>
          </NavLink>

          <p className='text-[1rem]'>
            By <span className='italic'>{post.author}</span> On {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
              <span className='font-semibold underline decoration-dashed decoration-1 underline-offset-2'>{post.category}</span>
            </NavLink>
          </p>
          <p className='text-[1rem]'>
            Posted on {post.date}
          </p>
        </div>

        <div className='flex flex-col gap-1'>
          <p>
            {post.content}
          </p>

          <p className='flex gap-[0.6rem] text-blue-800'>
            {post.tags.map((tag, index) => {  // for () in map return not need is auto happen and for {} we need return explicitly
              return <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span >{`#${tag}`}</span>
              </NavLink>
            })}
          </p>
        </div>

      </div>
    </div>
  )
}

export default Card
