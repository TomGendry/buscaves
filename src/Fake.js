import React from 'react'
import { Link } from 'react-router-dom'

function Fake() {
  return (
    <div className='min-h-screen pb-5 bg-gradient-to-r from-green-500 via-green-400 to-green-500'>

        <h2 className='text-center text-3xl font-bold text-white py-5'>¿Es este el ave ?</h2>
        <img src="Aigle2.jpg" alt="Aigle2" />
        <h2 className='bg-white mt-5 rounded-md text-center mb-5 text-3xl font-bold text-star py-5'>Un águila ?</h2>
        <Link to="/fakeTrue">
            <h2 className='bg-green-800 hover:bg-green-600 w-full text-center text-3xl py-4 my-2 text-white'>Sí</h2>
        </Link>
        <Link to="/fakeFalse">
            <h2 className='bg-red-800 hover:bg-red-500 w-full text-center text-3xl py-4 my-2 text-white'>No</h2>
        </Link>

    </div>
  )
}

export default Fake