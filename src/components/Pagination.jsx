import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const { page, totalPages, handlePageChange, loading } = useContext(AppContext);

  // useEffect(() => {
  //   handlePageChange(page);
  // }, [page])


  return (
    <div className='w-full flex flex-col items-center '>
      <div className='bg-gradient-to-b from-gray-400  to-transparent h-1 w-full'></div>

      <div className='flex justify-between items-center w-[46%] py-3'>
        <div className='flex gap-2'>
          {
            page > 1 &&
            <button onClick={() => {

              if (loading) return;
              handlePageChange(page - 1)
            }
            } className={`px-3 py-1 border rounded-md cursor-pointer font-semibold`}>Previous</button>
          }
          {
            page < totalPages &&
            <button onClick={() => {
              if (loading) return;
              handlePageChange(page + 1)
            }} className={` px-3 py-1 border rounded-md cursor-pointer font-semibold`}>Next</button>
          }
        </div>

        <div>
          <p className='font-bold'>Page {page} of {totalPages} </p>
        </div>
      </div>

    </div>
  )
}

export default Pagination
