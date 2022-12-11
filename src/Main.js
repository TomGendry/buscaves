import React from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 via-green-400 to-green-500 ">
        <div class="flex items-center justify-center">
            <img src="/Logo.png" alt="Logo" className='w-56 mb-2 mt-1'/>
        </div>
        <div class="grid grid-cols-5 gap-4 mx-5 content-start">
            <div class="col-span-3 bg-green-700 border-2 border-white rounded-md hover:border-yellow-300">
                <h2 className='mt-2 font-bold text-white text-center'>Chat</h2>
                <hr className='my-2'/>
                <div className="mx-1">
                    <div className=''>
                        <p className='text-xs text-white'>Random</p>
                        <p className='bg-white w-10/12 text-xs px-1 rounded-sm'>Esto es lo que he encontrado</p>
                    </div>
                    <div className='mt-1'>
                        <p className='text-xs text-white'>Random 2</p>
                        <p className='bg-white text-xs w-10/12 px-1 rounded-sm'>¿Qué clase de ave es ésta?</p>
                    </div>
                    <div className='mt-1 mb-4'>
                        <p className='text-xs text-white'>Random</p>
                        <p className='bg-white text-xs w-8/12 px-1 rounded-sm'>Es un halcón peregrino</p>
                    </div>
                </div>
            </div>
            <div class="col-span-2 bg-green-700 border-2 border-white rounded-md hover:border-yellow-300    ">  
                <h2 className='mt-2 font-bold px-3 text-white'>Clasificación</h2>
                <hr className='my-2'/>
                <div className="w-full">
                    <ul className='text-white text-xs ml-3'>
                        <li>
                            1: Pierre Debouy
                        </li>
                        <li>
                            2: Jules Amiri
                        </li>
                        <li>
                            3: Random
                        </li>
                        <li>
                            4: Random
                        </li>
                        <li>
                            5: Random
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-5">
            <img src="/MAP.PNG" alt="map" className='w-10/12 border-4 border-white hover:border-yellow-300'/>
        </div>
        <div className="flex justify-center mt-5">
            <Link to="/add">
            <AiFillPlusCircle className='text-white w-16 h-16 hover:text-star'/>
            </Link>
        </div>
    </div>
  )
}

export default Main