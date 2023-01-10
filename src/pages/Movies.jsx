import React, { useEffect } from 'react'
import Content from '../components/content/Content'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { useStateContext } from '../contexts/ContextProvider'

const Movies = () => {
  
    const { movies , setMovies} = useStateContext()

         useEffect(() => {
            setMovies(true)
         }, [movies])

  return (
    <div>
      <Header movies={movies} />
      <Content />
      <Footer />
    </div>
  )
}

export default Movies
