import React, { createContext } from 'react'
import FormSubmit from './FormSubmit';

export const userContext = createContext()
function Movie() {
 
 let movieName ='pushpa'

  return (
    <div>
       <userContext.Provider value={movieName}>
         <FormSubmit/>
       </userContext.Provider>
    </div>
  )
}

export default Movie;