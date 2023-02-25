import React from 'react'

const tabs=[
  {
    name:"BreakFast",
    src:'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png'
  }
  ,{
    name:"Lunch",
    src:'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png'
  },{
    name:"Dinner",
    src:'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png'
  }
]

const tab = ({activeTab,setActiveTab}) => {
  return (
    <div className='flex gap-1 justify-center px-20 h-20 lg:max-w-6xl md:max-w-2xl sm:max-w-sm m-auto  p-2 '>
      {tabs.map((tab)=>{
        return(
          <div className='flex justify-center'>
            <img src={tab.src} onClick={()=>setActiveTab(tab.name)} className=' hover:-translate-1  hover:scale-110 transition ease-in-out delay-150'></img>
            <div className=' items-center mt-4 mx-2'>
              {tab.name}
            </div>
          </div>
        )
      })

      }
    </div>
  )
}


export default tab;