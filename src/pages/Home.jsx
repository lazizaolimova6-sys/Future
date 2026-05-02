import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Register from '../components/Register'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Register />
      </main>
      <Footer/>


    </div>
  )
}
