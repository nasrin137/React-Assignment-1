import React from 'react'
import Container from '../../Components/Shared/Container'
import { startedCards } from '../../Components/Data'
import StartedCard from './StartedCard'
import Button from '../../Components/Shared/Button'
import { useNavigate } from 'react-router-dom'

function StartPage() {
    const navigate  = useNavigate()
    const handleClick = ()=>{
        navigate('/newIncident')
    }
  return (
    <section>
        <Container>
            <h1>Let’s get started</h1>
            <p>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
            <div className='border-[#E4E4E7] border-b-2 flex justify-between relative w-[600px] mx-auto mt-10'>
                <img src="Images/boll.png" alt="" className='absolute -top-3'/>
                <img src="Images/boll.png" alt="" className='absolute -top-3 left-72'/>
                <img src="Images/boll.png" alt="" className='absolute -top-3 right-0'/>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-10 '>
                {
                    startedCards.map((item,i)=>(
                        <StartedCard key={i} {...item}></StartedCard>
                    ))
                }
            </div>
            <button onClick={handleClick} classname="block mx-auto mt-10">Get Started</button>
        </Container>

    </section>
  )
}

export default StartPage