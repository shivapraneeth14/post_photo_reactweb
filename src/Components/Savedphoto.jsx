import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'

function Savedphoto() {
  const savedphoto = useSelector(state=>state.savedphotos)

  return (
    <div>
      <Header/>
      <div className=' text-center text-2xl'>Saved Photos</div>
    {savedphoto && savedphoto.map((photo, index) => (
  <div className='w-80 h-96 mt-5 flex-none' key={index}>
    <img className='w-80 h-80' src={photo.url} alt={`Photo ${photo.id}`} />
    <div>{photo.title}</div>
  </div>
))}
    </div>
  )
}

export default Savedphoto
