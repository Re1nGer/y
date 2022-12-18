import { Suspense } from 'react';
import './App.scss'
import { Navbar } from './components'
import Header from './components/Header/Header'
import React from 'react';

const Brands = React.lazy(() => import('./components/Brands/Brands'));
const WhatIsGpt3 = React.lazy(() => import('./components/WhatIsGpt3/WhatIsGpt3'));
const PossibilityContainer = React.lazy(() => import('./components/Possibilities/PossibilityContainer'));
const VR = React.lazy(() => import('./components/VR/VR'));
const Register = React.lazy(() => import('./components/Register/Register'));
const Blogs = React.lazy(() => import('./components/Blogs/Blogs')) 
const BlogHeader = React.lazy(() => import('./components/BlogHeader/BlogHeader'));
const Footer = React.lazy(() => import('./components/Footer/Footer')); 

const App = () => {
  return (
    <div className="app">
      <div className='landing__gradiend'>
        <Navbar />
        <Header />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Brands />
        <WhatIsGpt3 />
        <PossibilityContainer />
        <VR />
        <Register />
        <BlogHeader />
        <Blogs />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
