import React, { useEffect, useState } from 'react'
import { postinfo } from '../Data/Datainfo'
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { savepost } from '../Redux/Slice';


function Posts() {
  const [posts,setposts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await postinfo();
        console.log("getting posts")
        setposts(response);
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    };

    getPosts(); 
  }, []);

  const addtosave=(post)=>{
    console.log("adding",post)
    dispatch(savepost(post))
  
  }

  return (
    <div>
      <Header/>
      <h1>Posts</h1>
    <div className='  flex flex-wrap'>
   
    {posts && posts.map((post) => (
  <div className='w-96 h-56 mb-3 px-1 flex-none rounded-xl m-3 border border-blue-500 bg-gray-100 ml-2 flex flex-col justify-between' key={post.id}>
    <div>
      <div className='text-gray-800 text-center'>{post.body}</div>
      <div className='text-gray-800 mt-4'>title: {post.title}</div>
    </div>
    <div className='px-3 flex justify-between  h-6 bg-gray-100'>
      <div><FontAwesomeIcon icon={faHeart} />like</div>
      <div onClick={() => addtosave(post)}><FontAwesomeIcon icon={faBookmark} />save</div>
    </div>
  </div>
))}
     
  </div>
  </div>
  )
 

     }

export default Posts
