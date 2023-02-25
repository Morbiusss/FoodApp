import produce from 'immer'
import React from 'react'


const b_items=[{
  name:"Samosa",
  cusine:"Mithai,Dessert,Bakery",
  price:'50 for One',
  src:'https://b.zmtcdn.com/data/dish_photos/ba7/80eb9c1039d2fd872e79c52605567ba7.jpg'
},
{
  name:"Puri",
  cusine:"North Indian,Street Food",
  price:'50 for One',
  src:'https://b.zmtcdn.com/data/dish_photos/4d0/312fb889dc08887f9e87fc2b7b4154d0.jpg?output-format=webp'
},
{
  name:"Idli",
  cusine:"North Indian,South Indian",
  price:'50 for One',
  src:'https://b.zmtcdn.com/data/dish_photos/f17/d84a8e8480ee456e3a2a9282ee1e5f17.jpg?output-format=webp'
},
{
  name:"Jalebi",
  cusine:"North Indian,Sweets",
  price:'50 for One',
  src:'https://b.zmtcdn.com/data/dish_photos/5c1/ce10d6e4f810f50e406a2c037b2125c1.jpg?output-format=webp'
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


const Dinner = () => {
  
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
        class="inline-block rounded bg-gray-900 hover:bg-gray-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] "
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

export default Dinner
