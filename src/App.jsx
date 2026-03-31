import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import './App.css'
import RatingSection from './component/RatingSection/RatingSection'
import Footer from './component/Footer/Footer'
import ReadyToTransform from './component/ReadyToTransform/ReadyToTransform'
import GetStarted from './component/GetStartedSection/GetStarted'
function App() {


  return (
    <>
<header className='space-y-14'>
  <Navbar></Navbar>
  <Banner></Banner>
</header>

<main className=''>
<RatingSection/>
<GetStarted/>
<ReadyToTransform/>
<Footer/>
</main>
    </>
  )
}

export default App

