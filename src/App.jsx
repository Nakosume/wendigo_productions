import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing, AboutUs, ContactUs, Projects, ProjectDetails, LogIn, Admin, NotFound } from './pages/index'

export default function App () { // Components 101, make function
  return ( // return whatever the component may be using HTML, <> </> this be called a fragment, its an empty tag lol makes it clean tho
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path='aboutUs' element={<AboutUs />} />
        <Route path='contactUs' element={<ContactUs />} />
        <Route path='projects' element={<Projects />} />
        <Route path='projects/:id' element={<ProjectDetails />} />
        <Route path='logIn' element={<LogIn />} />
        <Route path='admin' element={<Admin />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
