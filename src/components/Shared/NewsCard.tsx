import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import newsImage from "@/public/banner1.avif"
import { Button } from '../ui/button'
const NewsCard = () => {
  return (
    <div className='border p-4 rounded-md shadow-md'>
      <Link href="">
      <Image src={newsImage} alt='newsImg' className='mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200'/>
      </Link>
      <div>
        <h2 className='text-xl font-semibold my-3'>What To Expect From United Natural Food Inc (UNF) 04 2024 Earni</h2>
      <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati et, dolorem tempora facilis temporibus.</p>
        <Link href="/"><Button>Read More</Button></Link>
      </div>
    </div>
  )
}

export default NewsCard
