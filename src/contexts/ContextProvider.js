import { createContext, useContext, useEffect, useState } from "react";


const StateContext = createContext()


const ContextProvider = ({children}) => {

    const [home, setHome] = useState(false)
    const [movies, setMovies] = useState(false)
    const [series, setSeries] = useState(false)
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
          
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/data.json');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);


  return (

    <StateContext.Provider
    value={{
        home, setHome,
        movies, setMovies,
        series, setSeries,
        data,isLoading,error
    }}
    >
      {children}

    </StateContext.Provider>

  )
}

export default ContextProvider
export const useStateContext = () => useContext(StateContext)