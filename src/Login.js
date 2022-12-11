import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="relative bg-green-400 flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-green-100 rounded-md shadow-xl shadow-green-600/40 ring ring-2 ring-green-600 lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-green-700 underline uppercase decoration-wavy">
            <img src='/Logo.png' alt='Logo'/>
            </h1>
            <form className="mt-6">
                <div className="mb-2">
                    <label
                        for="email"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Pseudo
                    </label>
                    <input
                        type="email"
                        className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        for="password"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Contraseña
                    </label>
                    <input
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <p
                    className="text-xs text-green-600 hover:underline"
                >
                    ¿Has olvidado la contraseña?
                </p>
                <div className="mt-6">
                    <Link to="/main">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                            Acceso
                        </button>
                    </Link>
                </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
                {" "}
                ¿No tiene cuenta?{" "}
                <p
                    className="font-medium text-green-600 hover:underline"
                >
                    Inscríbete
                </p>
            </p>
        </div>
    </div>
  )
}

export default Login