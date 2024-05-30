/*import img1 from '../img/proj/1.jpeg'
import img2 from '../img/proj/2.jpeg'
import img3 from '../img/proj/3.jpeg'*/

import { firestore } from '../firebase'
import { getDocs, collection } from '@firebase/firestore'

/*const getProjects2 = () => {
  const projects = [
    {
      title: 'project a',
      description: 'testing',
      type: 'example1',
      author: 'ye',
      img: '',
      url: 'none',
      id: 1
    },
    {
      title: 'project b',
      description: 'testing',
      type: 'example1',
      author: 'ye',
      img: img1,
      url: 'none',
      id: 2
    },
    {
      title: 'project c',
      description: 'testing',
      type: 'example2',
      author: 'ye',
      img: img2,
      url: 'none',
      id: 3
    },
    {
      title: 'project d',
      description: 'testing',
      type: 'example3',
      author: 'ya',
      img: ' ',
      url: 'none',
      id: 4
    },
    {
      title: 'project e',
      description: 'testing',
      type: 'example4',
      author: 'yo',
      img: img3,
      url: 'none',
      id: 5
    }
  ]
  return Promise.resolve(projects)
}*/

const getProjects = async(e) => {
  const querySnapshot = await getDocs(collection(firestore, "projects"))
  const data = []
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data()})
  });
  console.log("projList.js - data:", data);
  return data
}

export default getProjects
