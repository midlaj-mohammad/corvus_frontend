import React from 'react'
import BannerSection from '../components/BannerSection/BannerSection'
import AcCategory from '../components/AcApplaince&reapir/AcCategory'
import MostServices from '../components/MostServices/MostServices'
import OffersSection from '../components/OffersSection/OffersSection'

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">   
      
       
         <BannerSection />

         <OffersSection />
         <AcCategory />
         <MostServices />
         
         </div>
  )
}

export default Home