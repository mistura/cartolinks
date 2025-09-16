import { Avatar } from 'antd'
import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

export default function Account() {
  return (
    <div className='flex space-x-3 items-center'>
        <div className='flex space-x-[5px] items-center'>
            <Avatar className='avater-bg' size={22}/>
            <p className='text-sm ml-1 '>Benevolent Doe</p>
        </div>
       <FaAngleDown />
      
    </div>
  )
}
