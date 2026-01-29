import React from 'react'

const Spinner = () => {
  return (
    <div className ="w-full h-screen flex flex-col justify-center items-center text-3xl gap-2"  >
      <div className='spinner'></div>
      <h1 className='font-bold'>Loading..</h1>
    </div>
  )
}

export default Spinner
