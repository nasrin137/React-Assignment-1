import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
    const navigate = useNavigate()

    const handleBackPage = ()=>{
        navigate('/')
    }
  return (
    <div className='max-w-xs mx-auto mt-60'>
        <h1 className='text-lg font-semibold mb-5'>Page Not Found</h1>
        <button onClick={handleBackPage}
        className='w-[120px] bg-primary rounded-xl text-white px-2 py-2 hover:bg-white hover:text-primary transition duration-300'>Back</button>
    </div>
  )
}

export default ErrorPage