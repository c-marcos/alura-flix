import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { AddNewVideo } from './pages/NewVideo'


export const AppRoutes = () => {

   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/new-videos' element={<AddNewVideo/>}/>
         </Routes>
      </BrowserRouter>
   )
}