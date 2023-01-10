import React, { useEffect } from 'react'
import Content from '../components/content/Content'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { useStateContext } from '../contexts/ContextProvider'

const Home = () => {

       
const { home ,setHome ,setSeries, setMovies } = useStateContext()

   useEffect(() => {

    setSeries(false)
    setMovies(false)
    setHome(true)

   } ,[home])
   
        

  return (
    <div>
      <Header home={home} />
      <Content  home={home} />
      <Footer />
    </div>
  )
}

export default Home
