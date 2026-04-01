import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import './App.css'
import RatingSection from './component/RatingSection/RatingSection'
import Footer from './component/Footer/Footer'
import ReadyToTransform from './component/ReadyToTransform/ReadyToTransform'
import GetStarted from './component/GetStartedSection/GetStarted'
import Card from './ui/PricingCard'
import Pricing from './component/PricingSection/Pricing'
import AllProducts from './component/AllProductsSection/AllProduct/AllProducts'
import { useState } from 'react'
function App() {

//  state for  cart 
const [additem, setAdditem ]=useState([])

  return (
    
    <>
<header className='space-y-14'>
  <Navbar additem={additem}></Navbar>
  <Banner></Banner>
</header>

<main >
<RatingSection/>
<AllProducts additem={additem} setAdditem={setAdditem}/>
<GetStarted/>
<Pricing ></Pricing>
<ReadyToTransform/>
</main>

<footer>
<Footer/>
</footer>
    </>
  )
}

export default App

