import React, { useEffect } from 'react'
import Content from '../components/content/Content'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { useStateContext } from '../contexts/ContextProvider'

const Series = () => {
 
  const { series ,setSeries } = useStateContext()

      useEffect(() => {
        setSeries(true)
      }, [series])
        
   console.log('from series page');
   console.log('series status',series);

  return (
    <div>
      <Header series={series} />
      <Content  />
      <Footer />
    </div>
  )
}

export default Series
