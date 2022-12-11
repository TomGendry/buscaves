import React, { useEffect } from 'react'

function FakeValidate({value}) {
  let h2 = "";
    if (value === true) {
        h2 = <h2 className='text-white'>Enhorabuena, has encontrado un águila <br /><span className='text-star'>(+50 puntos)</span></h2>
    } else {
        h2 = <h2>Lástima, no hay puntos extra <br /><span className='text-red-600'>(+0 puntos)</span></h2>
    }   

    useEffect(() => {
        setTimeout(() => {
            window.location.replace('/main');
        }, 3000)
    }, [])

    return (
        <div className='min-h-screen pb-5 bg-gradient-to-r text-center from-green-500 via-green-400 to-green-500 flex flex-row justify-center items-center text-3xl'>

            {h2}

        </div>
    )
}

export default FakeValidate