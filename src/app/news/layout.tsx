import Link from 'next/link'
import React from 'react'

const NewsLayout = ({children}:{
    children: React.ReactNode
}) => {
  return (
    <div className='py-12'>
      <h1 className='text-2xl font-bold mb-8'>Latest News</h1>
     <nav className='space-x-6 mb-5'>
        <Link href="/news/sports">Sports</Link>
        <Link href="/news/health">Health</Link>
        <Link href="/news/technology">Technology</Link>

     </nav>
         <div className='flex justify-between'>
        <div className='md:w-4/5 h-96 bg-slate-200 flex items-center justify-center'>
            {children}
        </div>
        <div className='bg-purple-300 h-96 w-1/5'>
            Sidebar
        </div>
     </div>
    </div>
  )
}

export default NewsLayout
