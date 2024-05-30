/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import { WendiContext } from './WendiContext'
import getProjects from '../services/projList'

import { firestore, auth } from '../firebase'
import { addDoc, collection } from '@firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

export const WendiContextProvider = ({ children }) => {
  //* From  Admin Page
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [url, setUrl] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [authors, setAuthors] = useState([])

  const ref = collection(firestore, "projects")
  const handleSubmit = event => {
    event.preventDefault()
    title.trim().length === 0 || type.trim().length === 0
      ? alert('Please, fill all spaces')
      : console.log('uploaded') //* instead of this, we have to make a new project object and upload it to firebase
    console.log(title)
    console.log(description)
    console.log(type)
    console.log(url)
    console.log(imgUrl);
    console.log(authors)

    let data = {
      title: title,
      description: description,
      type: type,
      url: url,
      img: imgUrl,
      author: authors
    }
    try {
      addDoc(ref, data)
      alert("Project Added")
    } catch (err) {
      console.log(err);
    }
  }

  function handleChange(e) {
    const { value, checked } = e.target
    if (checked) {
      setAuthors(prev => [...prev, value])
    }
  }

  //* From  Projects Page
  const [projects, setProjects] = useState([])
  const [selectFilter, setSelectFilter] = useState([])

  useEffect(() => {
    getProjects()
      .then(data => {
        setProjects(data)
      })
    console.log(selectFilter)
    console.log(filterAuthor)
  }, [selectFilter])

  const filterType = Array.from(
    new Set(projects.map((res) => res.type))
  )

  const filterAuthor = Array.from(
    new Set(projects.map((res) => res.author))
  )

  const typeOptions = filterType.map((type) => (
    { value: type, label: type }
  ))

  const authorOptions = filterAuthor.map((author) => (
    { value: author, label: author }
  ))

  const groupedOptions = [
    {
      label: 'Type',
      options: typeOptions
    },
    {
      label: 'Author',
      options: authorOptions
    }
  ]

  const filterProjects = selectFilter.length
    ? projects.filter((projects) => selectFilter.map((res) => res.value).includes(projects.type) || //* single filter mode: projects.type.includes(selectFilter.value)
      selectFilter.map((res) => res.value).includes(projects.author))
    : projects

  //* From  ProjectDetails Page
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    getProjects()
      .then(data => {
        setProjects(data)
      })
      .finally(setLoader(false))
    console.log('1')
  }, [])

  //* From LogIn Page
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [currentUser, setCurrentUser] = useState(null)
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser)
    return unsubscribe
  }, [])

  const initializeUser = async (user) => {
    if (user) {
      setCurrentUser({ ...user })
      setUserLoggedIn(true)
    } else{
      setCurrentUser(null)
      setUserLoggedIn(false)
    }
    setLoading(false)
  }

  return (
    <WendiContext.Provider value={{
      //* From  Admin Page
      title,
      setTitle,
      description,
      setDescription,
      type,
      setType,
      url,
      setUrl,
      imgUrl,
      setImgUrl,
      handleChange,
      handleSubmit,
      //* From  Projects Page
      selectFilter,
      setSelectFilter,
      groupedOptions,
      filterProjects,
      //* From ProjectDetails Page
      loader,
      projects,
      //* From LogIn Page
      email,
      setEmail,
      password,
      setPassword,
      currentUser,
      setCurrentUser,
      userLoggedIn,
      setUserLoggedIn,
      loading,
      setLoading
    }}
    >
      {children}
    </WendiContext.Provider>
  )
}
