import React, { useEffect, useState } from 'react'
import { photoinfo } from '../Data/Datainfo'
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { savephoto } from '../Redux/Slice';


function photos() {
  const [photos,setphotos] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const response = await photoinfo();
        console.log("getting posts")
        setphotos(response);
        console.log(response)
      } catch (error) {
        console.log(error);
      }
      
    };

    getPhotos(); 
  }, []);

  const addtosave=(photo)=>{
    console.log("adding",photo)
    dispatch(savephoto(photo))
   
  }

  return (
    <div>
      <Header/>
      <h1 className=' text-xl'>Photos</h1>
    <div className='  flex flex-wrap justify-evenly'>
    {photos && photos.map((photo) => (
  <div className='w-80 h-96 mt-5 mb-3 flex-none' key={photo.id}>
    <img className='w-80 h-80' src={photo.url} alt={`Photo ${photo.id}`} />
    <div>{photo.title}</div>
    <div className=' w-72 h-6 flex justify-between items-center'>
      <div><FontAwesomeIcon icon={faHeart} />like</div>
      <div onClick={() => addtosave(photo)}><FontAwesomeIcon icon={faBookmark} />save</div>
    </div>
  </div>
))}
     
  </div>
  </div>
  )
 

     }

export default photos

