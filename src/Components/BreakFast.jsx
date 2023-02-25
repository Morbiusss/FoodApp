import produce from 'immer'
import React from 'react'


const b_items=[{
  name:"Samosa",
  cusine:"Mithai,Dessert,Bakery",
  price:'50 for One',
  src:'https://b.zmtcdn.com/data/dish_photos/7dc/6ef1883d1650390efe80e0ed32d727dc.jpg?output-format=webp'
},
{
  name:"Puri",
  cusine:"North Indian,Street Food",
  price:'50 for One',
  src:'https://b.zmtcdn.com/data/dish_photos/bd2/ce238565b1d87a861df7a61054adbbd2.jpg?output-format=webp'
},
{
  name:"Idli",
  cusine:"North Indian,South Indian",
  price:'50 for One',
  src:'https://b.zmtcdn.com/data/dish_photos/ba8/265280047a6d829633cfd68f0fdf1ba8.jpg?output-format=webp'
},
{
  name:"Jalebi",
  cusine:"North Indian,Sweets",
  price:'50 for One',
  src:'https://b.zmtcdn.com/data/dish_photos/b27/1dbd32f0c82fa23960d0c47649216b27.jpg?output-format=webp'
},
{
  name:"Missi Roti",
  cusine:"Rajasthani",
  price:'50 for One',
  src:'https://b.zmtcdn.com/data/dish_photos/1da/b290293af415e6733a27d81e9b86c1da.jpg'
},
{
  name:"Chole Bhature",
  cusine:"Street Food",
  price:'150 for One',
  src:'https://b.zmtcdn.com/data/dish_photos/16c/834f05a2ffe70ea0716d38238613116c.jpg?output-format=webp'
},
{
  name:"Pind Balluchi",
  cusine:"North Indian, Mughal",
  price:'350 for One',
  src:'https://b.zmtcdn.com/data/dish_photos/a8c/ecfbfba331720a50ee2f36f3eb56ca8c.jpg'
},
{
  name:"Break A Bread",
  cusine:"Fast Food, Chinese",
  price:'350 for One',
  src:'https://b.zmtcdn.com/data/dish_photos/22d/f4dcbbf938ee97489ff125993ee2f22d.jpg'
}
]


const BreakFast = () => {
  
  return(
    <>
    {
      b_items.map((item)=>{
        return(
          <div class="flex justify-center  p-2 mx-1">
  <div
    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700 translate-x-8 m-1">
    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
      <img
        class="rounded-t-lg h-44 w-60"
        src={item.src}
        alt="" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-slate-900">
        {item.name}
      </h5>
      <p class="mb-4 text-base text-slate-600 dark:text-slate-900">
        {item.cusine}
      </p>
      <button
        type="button"
        class="inline-block rounded bg-orange-900 hover:bg-orange-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] "
        >
        {item.price}
      </button>
    </div>
  </div>
</div>
        )
      })
    }
    </>
  )
}

export default BreakFast
