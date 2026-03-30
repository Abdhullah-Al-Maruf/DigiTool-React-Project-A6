import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import './App.css'
import RatingSection from './ui/RatingSection'

function App() {


  return (
    <>
<header className='space-y-14'>
  <Navbar></Navbar>
  <Banner></Banner>
</header>

<main className='space-y-10'>
<RatingSection/>

</main>
    </>
  )
}

export default App
