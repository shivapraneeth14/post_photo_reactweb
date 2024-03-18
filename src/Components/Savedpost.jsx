import React from 'react'
import {  useSelector } from 'react-redux';


function Savedpost() {
  const savedpost = useSelector(state=>state.savedposts)
  console.log(savedpost)
 
  return (
    <div>
      {savedpost.map((post,index) => (
  <div className='w-96 h-56 mb-3 px-1 flex-none flex-wrap rounded-xl m-3 border border-blue-500 bg-gray-100 ml-2 flex flex-col justify-between'key={`${post.id}-${index}`}>
    <div className='text-black text-center'>{post.body}</div>
    <div className='text-gray-500 mt-4'>title: {post.title}</div>
    {/* <div className='px-3 flex justify-between w-96 h-4 bg-stone-500'></div> */}
  </div>
))}
    </div>
  )
}

export default Savedpost
