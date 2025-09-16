import React from 'react'
import Image from 'next/image'
import Account from './Account'
import HeaderTabMenu from './HeaderTabMenu'
import HeaderLinks from './HeaderLinks'
import Logo from '../../public/krea-black.png'

export default function Header() {
  return (
    <div className='flex dark:bg-gray-900 bg-white justify-between w-full flex-cols'>
      <div className=' space-x-5 flex '>
       <Image
            aria-hidden
            src={Logo}
            alt="Header Logo"
            width={38}
            height={22}
          />
          <Account />
      </div>
       <HeaderTabMenu />

    <HeaderLinks/>
    </div>
  )
}
