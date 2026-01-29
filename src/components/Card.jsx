import React from 'react'

const Card = ({post}) => {
  return (
   <div className=' w-full flex justify-center'>
     <div className='w-[45%] pt-4 flex flex-col gap-3' >
      <div >
        <p className='font-bold text-[1.15rem]'>
        {post.title}
      </p>
      <p className='text-[1rem]'>
        By <span className='italic'>{post.author}</span> on <span className='font-semibold underline decoration-dashed decoration-1 underline-offset-2'>{post.category}</span>
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
            {post.tags.map((tag,index) => {
                return <span key={index}>{`#${tag}`}</span>
            })}
        </p>
      </div>

    </div>
   </div>
  )
}

export default Card
