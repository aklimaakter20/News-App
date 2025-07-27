import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import newsImage from "@/public/banner1.avif"
import { Button } from '../ui/button'
import { NewsCardProps } from '@/types/news'

const NewsCard = ({item}:NewsCardProps) => {
  return (
    <div className='border p-4 rounded-md shadow-md'>
      <Link href="">
      <Image src={item.thumbnail} height={150} width={250} alt='newsImg' className='mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200'/>
      </Link>
      <div>
        <h2 className='text-xl font-semibold my-3'>{item.title}</h2>
      <p className='mb-4'>{item.description.substring(0,100)}...</p>
        <Link href="/"><Button>Read More</Button></Link>
      </div>
    </div>
  )
}

export default NewsCard
