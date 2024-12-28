import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center items-center min-h-[450px] px-[10px] bg-[url("/hero-image.avif")] bg-no-repeat bg-cover bg-bottom mb-6 text-white bg-opacity-15'>
      <div className='w-[800px] text-center leading-[70px]'>
        <h1 className='font-extrabold xl:leading-[70px] lg:leading-[60px] leading-[35px] xl:text-[80px] lg:text-[60px] text-[40px] mb-[12px]'>Unleash Culinary Excellence</h1>
        <p className='leading-[120%] '>Explore a world of flavors, discover handcrafted recipes, and let the aroma of our passion for cooking fill your kitchen</p>
        <button className="bg-yellow-500 leading-4 lead border-none text-black font-bold mt-[40px] py-2 px-4 rounded-md hover:bg-yellow-400">
                  Explore Recipes
            </button>
      </div>
    </div>
  )
}

export default Hero