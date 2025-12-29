import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, AboutUs, ContactUs, Projects, ProjectDetails, LogIn, Admin, NotFound } from './pages/index'

export default function App () { // Components 101, make function
  return ( // return whatever the component may be using HTML, <> </> this be called a fragment, its an empty tag lol makes it clean tho
    <BrowserRouter>
      <Routes>
        <Route path='wendigo_productions/' ={<Landing />} />
        <Route path='wendigo_productions/aboutUs' element={<AboutUs />} />
        <Route path='wendigo_productions/contactUs' element={<ContactUs />} />
        <Route path='wendigo_productions/projects' element={<Projects />} />
        <Route path='wendigo_productions/projects/:id' element={<ProjectDetails />} />
        <Route path='wendigo_productions/logIn' element={<LogIn />} />
        <Route path='wendigo_productions/admin' element={<Admin />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
