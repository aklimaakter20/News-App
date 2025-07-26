import React from 'react'
import { Button } from "../ui/button";
import Image from "next/image";
import BannerImg from "@/public/banner1.avif";
const Banner = () => {
  return (
    <div className='bg-slate-100'>
  <div className='px-4 py-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
       <div>
        <Image src={BannerImg} width={600} height={480} alt= "bannerImg"/>
       
     </div>
     <div className='space-y-4 flex flex-col'> 
       <h4 className='text-sm font-medium text-gray-500'>Technology</h4>
       <h2 className='text-3xl font-bold'>OpenAi is Growing Fast and Burning Through Piles of Money</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, facere assumenda possimus quam nemo, excepturi reiciendis rerum consequatur  magnam sapiente. Laboriosam, ad? Unde, velit ipsum!</p> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fuga accusamus harum expedita laudantium, voluptatem molestiae. sequi consectetur nat eum, nam recusandae cum ad cupiditate veritatis placeat!</p>
        <Button size="lg" variant="default">Read More</Button>
     </div>
  </div>
    </div>
  )
}

export default Banner
