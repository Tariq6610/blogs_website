import React from 'react'

const RecipesIntro = () => {
  return (
    <div className='max-w-[813px] mx-auto text-center min-h-400px'>
        <div className='max-w-[420px] mx-auto'>
        <h1 className='xl:text-[40px] md:text-[30px] text-[24px] font-bold leading-[40px] lg:mb-[12px] mb:8px'>EMBARK ON A JOURNEY</h1>
        <p className=''>With our diverse collection of recipes we have something to satisfy every palate.</p>
        </div>
        <div className='flex justify-between w-full gap-y-2 flex-wrap h-auto lg:my-[40px] my-[24px]'>
            <div className='px-3 py-2 rounded-lg hover:bg-green-400 border border-gray-400'>
                All
            </div>
            <div className='px-3 py-2 rounded-lg hover:bg-green-400 border border-gray-400'>
                VEGAN
            </div>
            <div className='px-3 py-2 rounded-lg hover:bg-green-400 border border-gray-400'>
                BREAKFAST
            </div>
            <div className='px-3 py-2 rounded-lg hover:bg-green-400 border border-gray-400'>
                LUNCH
            </div>
            <div className='px-3 py-2 rounded-lg hover:bg-green-400 border border-gray-400'>
                DINNER
            </div>
            <div className='px-3 py-2 rounded-lg hover:bg-green-400 border border-gray-400'>
                DESSERT
            </div>
            <div className='px-3 py-2 rounded-lg hover:bg-green-400 border border-gray-400'>
                QUICK BITE
            </div>
        </div>
    </div>
  )
}

export default RecipesIntro