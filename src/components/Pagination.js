import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Pagination() {
  
  const {pageNumber,totalPages,handleClick}=useContext(AppContext);

  return (
        <div className="  fixed bottom-0 bg-white py-2 border-t-2 border-t-gray-300 w-full inset-x-0">
        <div className="flex gap-x-3 items-center w-11/12 max-w-2xl mx-auto">
            <div className='flex gap-x-2'>
                {
                    totalPages>0 && pageNumber>1 && <button onClick={()=>{handleClick(pageNumber-1)}} className="rounded-md border-gray-300 border-2 px-4 py-1">Previous</button>
                }
                {
                    totalPages>0 && pageNumber!==totalPages && <button onClick={()=>{handleClick(pageNumber+1)}} className="rounded-md border-gray-300 border-2 px-4 py-1">Next</button>
                }
            </div>
            <p className="text-sm font-semibold ml-auto">
                Page {pageNumber} of {totalPages}
            </p>
       </div>
    </div>

  )
}

export default Pagination