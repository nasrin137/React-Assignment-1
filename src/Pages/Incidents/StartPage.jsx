import React from 'react'
import Container from '../../Components/Shared/Container'
import { startedCards } from '../../Components/Data'
import StartedCard from './StartedCard'
import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Shared/Button'

function StartPage() {
    const navigate  = useNavigate()
    const handleClick = ()=>{
        navigate('/newIncident')
    }
  return (
    <section>
        <Container>
          <div className='max-w-4xl mx-auto mt-12'>
          <h1 className='font-bold text-center text-4xl text-dark'>Let’s get started</h1>
            <p className='w-[300px] md:w-[468px] mx-auto text-base text-ash text-center pt-5'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
            <div className='hidden border-[#E4E4E7] border-b-2 md:flex justify-between relative w-[600px] mx-auto mt-10'>
                <img src="Images/boll.png" alt="" className='absolute -top-3'/>
                <img src="Images/boll.png" alt="" className='absolute -top-3 left-72'/>
                <img src="Images/boll.png" alt="" className='absolute -top-3 right-0'/>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-5 mt-10 pl-20'>
                {
                    startedCards.map((item,i)=>(
                        <StartedCard key={i} {...item}></StartedCard>
                    ))
                }
            </div>
            <Button onClick={handleClick} classname="block mx-auto mt-10 mb-5">Get Started</Button>
          </div>
        </Container>

    </section>
  )
}

export default StartPage