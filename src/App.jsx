import './App.scss'
import { Navbar } from './components'
import Header from './components/Header/Header'
import Brands from './components/Brands/Brands'
import WhatIsGpt3 from './components/WhatIsGpt3/WhatIsGpt3'
import PossibilityContainer from './components/Possibilities/PossibilityContainer'
import VR from './components/VR/VR'
import Register from './components/Register/Register'
import Blogs from './components/Blogs/Blogs'
import BlogHeader from './components/BlogHeader/BlogHeader'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="app">
      <div className='landing__gradiend'>
        <Navbar />
        <Header />
      </div>
      <Brands />
      <WhatIsGpt3 />
      <PossibilityContainer />
      <VR />
      <Register />
      <BlogHeader />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App
