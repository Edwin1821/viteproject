import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css'
import FormSubmit from './components/FormSubmit';
import RootLayout from './components/layout/RootLayout';
import ReadForm from './components/ReadForm';
import UpdateForm from './components/UpdateForm';


const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/viteproject' element={<RootLayout/>}>
       <Route path='create' element={<FormSubmit/>}/>
       <Route path='read' element={<ReadForm/>}/>
       <Route path='/update/:id' element={<UpdateForm/>}/>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={Routes}/>
    </>
  )
}

export default App;
