import Header from './Common/Header/Header'
import Tabs from './Common/TabBar/Tab'
import Footer from './Common/Footer/Fotter'
import BreakFast from './BreakFast'
import Lunch from './Lunch'
import Dinner from './Dinner'
import { useState } from 'react'
import Stalls from './Common/Stalls/Stalls'
import {useId} from 'react'
import { v4 as uuid } from 'uuid';


const Home=()=>{
    const [activeTab,setActiveTab]=useState("BreakFast")

    return(
        
       <>   
        <Header/>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <div className='  my-12'>
        <Stalls></Stalls>
        </div>
        <div className='  flex justify-center  items-center h-10 '>
            <h1 className=' text-2xl'>{activeTab}</h1>
        </div>
        <div className='flex flex-wrap lg:max-w-6xl md:max-w-2xl sm:max-w-sm mx-auto mb-10'>
        {getTab(activeTab)}
        </div>
        <Footer/>
       </>
    )
}

const getTab=(tab)=>{
    switch(tab){
        case "BreakFast":
            return <BreakFast/>
        case "Lunch":
            return <Lunch/>
        case "Dinner":
            return <Dinner/>
        default:
            return <div> Loading...</div>
    }
}

export default Home;