import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
// import { useSearchParams } from 'react-router-dom';

const Pagination = () => {
  const { totalPages, handlePageChange, loading ,page} = useContext(AppContext);

  // const [searchParams, setSearchParams] = useSearchParams();
  // const pageAvailable = searchParams.get("page");
  // const page = pageAvailable ? Number(pageAvailable) : 1;



  return (
    <div className='w-full flex flex-col items-center '>
      <div className='bg-gradient-to-b from-gray-400  to-transparent h-1 w-full'></div>

      <div className='flex justify-between items-center w-[46%] py-3'>
        <div className='flex gap-2'>
          {
            page > 1 &&
            <button onClick={() => {
              // setSearchParams(prev=> {
              //   prev.set("page",page-1);
              //   return prev;
              // })

              if (loading) return;
              handlePageChange(page - 1)
            }
            } className={`px-3 py-1 border rounded-md cursor-pointer font-semibold`}>Previous</button>
          }
          {
            page < totalPages &&
            <button onClick={() => {
            //    setSearchParams(prev=> {
            //     prev.set("page",page+1);
            //     return prev;
              
            // })
            if (loading) return;
              handlePageChange(page + 1)

          
          }
          } className={` px-3 py-1 border rounded-md cursor-pointer font-semibold`}>Next</button>
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
