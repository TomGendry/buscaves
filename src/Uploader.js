import React from 'react'
import { useDropzone } from 'react-dropzone'

function Uploader() {
  const {getRootProps, getInputProps} = useDropzone({
    multiple: false,
    maxSize: 100000,
    onDrop: (acceptedFiles) => {
        alert(acceptedFiles[0].name)
    }
  })
  return (
    <div className="w-full text-center">
        <div 
        {...getRootProps()}
        className="px-6 py-8 border-2 border-border border-dashed bg-main rounded-md cursor-pointer">
            <input {...getInputProps()}/>
            <span className="mx-auto flex-colo text-subMain text-3xl">
                <img src='/Aigle1.jpg' alt='Aigle1'/>
            </span>
            <p className="text-sm mt-2">Drag your image here</p>
            <em className='text-xs text-border'>
                (only .jpg and .png files will be accepted)
            </em>
        </div>
    </div>
  )
}

export default Uploader