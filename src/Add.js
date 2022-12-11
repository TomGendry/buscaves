import React from 'react'
import Uploader from './Uploader'
import {FaThumbsUp} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Add() {
  return (
    <div className='min-h-screen pb-5 bg-gradient-to-r from-green-500 via-green-400 to-green-500 '>
        <div className="">
            <h2 className='text-center text-3xl font-bold text-white py-5'>Añadir un ave</h2>
            <Uploader/>
            <div className="text-sm">
                <label className="text-border font-semibold">Descripción del ave</label>
                <textarea className={`w-full w-15 mt-2 p-6 border bg-main border-border rounded`} placeholder="Pico ganchudo, alas largas y poderosas, garras afiladas.">

                </textarea>
            </div>
            <div className="text-sm w-full">
                <label className="text-border font-semibold">Ubicación</label>
                <input required type="text" placeholder="Ubicacion de la photo"className={`w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main`}/>
            </div>
            <Link to="/fake" className=" rounded-lg mt-5 mx-3 bg-white flex flex-rows">
                <FaThumbsUp className='text-star w-12 h-12 mr-5 my-3'/> Validar
            </Link>
        </div>
    </div>
  )
}

export default Add