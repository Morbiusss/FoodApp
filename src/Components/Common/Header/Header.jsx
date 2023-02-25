import logo from "../../Images/My project.png"
import {CiSearch} from 'react-icons/ci'
import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
        <>
        <div className="grid grid-cols-1 lg:max-w-6xl md:max-w-2xl sm:max-w-sm m-auto my-2 lg:grid-cols-5 text-slate-800 bg-slate-100 rounded-xl shadow-xl  px-10 hover:bg-orange-300 ease-in duration-500 hover:scale-110 ">
            <div className=" flex justify-center lg:justify-start  py-2 lg:col-span-2   py-1"><img src={logo} className="object-conatin h-12 pt-2" alt="loading"></img></div>
            <div className="col-span-3 grid  gap-3 lg:gap-0 grid-cols-1  lg:grid-cols-4   flex justify-around items-center">
                <Link className="" to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <svg className=" w-7 h-9 fill-slate-300 text-slate-300" viewBox="0 0 20 20 "><CiSearch></CiSearch></svg>
                    </span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full  rounded-xl py-2 
                    pl-9 pr-3 shadow-sm focus:outline-none focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Explore your meal..." type="text" name="search"/>
                </label>
                <button className="text-slate-700 hover:text-slate-100 bg-red-300 hover:bg-red-600 rounded-full w-20 mx-auto p-2 hover:ease-in duration-300 hover:scale-105">Log In</button>
            </div>
        </div>
        </>
















        // <div className="grid grid-cols-1 bg-slate-100 md:bg-slate-100  md:grid-cols-3  lg:bg-slate-100 shadow-2xl rounded-xl m-3 p-2 items-center">
        //     <div className="md:text-start px-12">Logo</div>
        //     <div className="grid grid-cols-1 md:grid-cols-3">
        //         <div className="md:text-start ">Home</div>
        //         <div className="">About us</div>
        //         <div className="md:text-end">Explore</div>
        //     </div>
        //     <div className="flex justify-center">
        //     <div className="flex md:items-center py-1 md:px-3">
        //     <div className="flex space-x-1">
        //         <input
        //             type="text"
        //             className="block w-full px-4 py-2 text-black-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        //             placeholder="Search..."
        //         />
        //         <button className="px-4 text-white bg-red-600 md:bg-pink-400  bg--600 rounded-full ">
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 className="w-5 h-5"
        //                 fill="none"
        //                 viewBox="0 0 24 24"
        //                 stroke="currentColor"
        //                 strokeWidth={2}
        //             >
        //                 <path
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        //                 />
        //             </svg>
        //         </button>
        //     </div>
        // </div>
        //     </div>
        // </div>
    )
}
export default Navbar;