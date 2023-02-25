import React from 'react'
const stalls=[
    {
      name:"Stall1",
      src:"https://b.zmtcdn.com/data/pictures/4/3401744/a5fe55d075d83d4c4d9915f2776d940e_featured_v2.jpg",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae nam inventore."
    },
    {
      name:"Stall2",
      src:'https://b.zmtcdn.com/data/pictures/4/3401744/a5fe55d075d83d4c4d9915f2776d940e_featured_v2.jpg',
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae nam inventore."
    },
    {
      name:"Stall3",
      src:'https://b.zmtcdn.com/data/pictures/9/19359199/c9da60edee78d0005e959deb3decb915_featured_v2.jpg',
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae nam inventore."
    },
    {
      name:"Stall3",
      src:'https://b.zmtcdn.com/data/pictures/9/19359199/c9da60edee78d0005e959deb3decb915_featured_v2.jpg',
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae nam inventore."
    },
    {
      name:"Stall3",
      src:'https://b.zmtcdn.com/data/pictures/9/19359199/c9da60edee78d0005e959deb3decb915_featured_v2.jpg',
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae nam inventore."
    },
    {
      name:"Stall3",
      src:'https://b.zmtcdn.com/data/pictures/9/19359199/c9da60edee78d0005e959deb3decb915_featured_v2.jpg',
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae nam inventore."
    },
    {
      name:"Stall3",
      src:'https://b.zmtcdn.com/data/pictures/9/19359199/c9da60edee78d0005e959deb3decb915_featured_v2.jpg',
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae nam inventore."
    },
    {
      name:"Stall3",
      src:'https://b.zmtcdn.com/data/pictures/9/19359199/c9da60edee78d0005e959deb3decb915_featured_v2.jpg',
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae nam inventore."
    }
  ]
const Stalls = () => {
    return (
        <div className="overflow-x-auto shadow-xl flex flex-row lg:max-w-6xl md:max-w-2xl sm:max-w-sm m-auto ">
        {
          stalls.map((stall)=>{
            return(
              <div class="mx-2">
      <div
        class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700 w-96">
        <a href="#!" data-te-ripple-init data-te-ripple-color="light">
          <img
            class="rounded-t-lg"
            src={stall.src}
            alt="Image" />
        </a>
        <div class="p-6">
          <h5
            class="mb-2 text-xl font-medium leading-tight text-slate-800 dark:text-slate-600">
            {stall.name}
          </h5>
          <p class="mb-4 text-base text-neutral-600 dark:text-slate-700">
            {stall.des}
          </p>
          <button
            type="button"
            class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-ripple-init
            data-te-ripple-color="light">
            Button
          </button>
        </div>
      </div>
    </div>
            )
          })
        }
        </div>
      )
    }

export default Stalls
