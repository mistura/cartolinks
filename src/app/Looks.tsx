import React, {  ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'



export default function Looks(props: {children: ReactNode, className: string}) {
  return (
    <div className={` overflow-hidden ${props.className ?? ''}`}>
      <section className='px-[32px] max-w-screen h-[60px] flex items-center'>
        <Header />
      </section>
      <main className='w-full overflow-auto px-[32px] h-[calc(100vh-110px)] '>
        {props.children}
      </main>

    <section className=' px-[32px] max-w-screen h-[50px] bg-[#262626] dark:bg-black flex items-center'>
        <Footer/>
    </section>



      
    </div>

  )
}
