import React from 'react'
import { FaCreditCard } from 'react-icons/fa6'
import { VscLaw } from 'react-icons/vsc'

export default function PreFooter() {
    const items =[
        {name: 'Legal', icon: <FaCreditCard />},
        {name: 'Pricing', icon: <VscLaw />}
    ]
  return (
    <div className='w-full items-center bg-white dark:bg-black flex py-1 justify-between'>
        <h3>Gallery</h3>
        <div className='grid grid-cols-2 gap-x-3 text-sm'>
            {items.map((d, index) =>(
                <div key={index} className='flex space-x-3 items-center'>
                    <span>{d.icon}</span>
                    <p>{d.name}</p>
                </div>
            ))}
        </div>
      
    </div>
  )
}
