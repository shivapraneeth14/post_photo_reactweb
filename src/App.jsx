import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import { photoinfo,postinfo } from './Data/Datainfo'

function App() {
 const [posts,setposts] = useState([])
 const [photos,setphotos] = useState([])

 useEffect(() => {
  const fetchPhoto = async () => {
    try {
 
      const photoData = await photoinfo();
      const postData = await postinfo();
      setphotos(photoData);
      setposts(postData);
      console.log(photoData);
      console.log(postData);
    } catch (error) {
    
      console.error('Error fetching photo information:', error);
    }
  };

  fetchPhoto();

}, []);
 

  return (
    <>
    <div className=' absolute w-full h-full bg-white px-3'>
     <div className=' relative top-1 w-full h-16 bg-red-700'>
      <Header/>
      <div className='  text-2xl'>Photos</div>
      <div className='w-full h-96  flex overflow-x-auto'>
    
  {photos && photos.map((photo) => (
    <div className='w-80 h-96 flex-none ' key={photo.id}>
      <img className='w-80 h-80 object-cover' src={photo.url} alt={`Photo ${photo.id}`} />
      <div>{photo.title}</div>
    </div>
  ))}
</div>
<div className='  text-2xl'>Posts</div>
<div className=' absolute w-full h-96 flex justify-center items-center overflow-x-auto mt-6'>

  {posts && posts.map((post) => (
    <div className=' border rounded-xl border-blue-500 bg-gray-100 w-96 h-56 flex-none   ml-2' key={post.id}>
      <div className=' text-gray-800 text-center'>{post.body}</div>
      <div className=' relative bottom-1 text-gray-800 mt-4 '>title:{post.title}</div>
    </div>
  ))}
</div>
     </div>
    </div>

     
    </>
  )
}

export default App
