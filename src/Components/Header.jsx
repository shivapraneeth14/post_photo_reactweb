import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div>
      <div className=' rounded-xl text-white pt-4 bg-black w-full h-24 flex justify-around'>
       <Link to="/">
       home
       </Link>
       <input className=' rounded-xl h-8' type="text" />
       <Link to="/Posts">
     posts
       </Link>
       <Link to="/Photos">
      photos
       </Link>

       <Link to="/savedPost">
      savedposts
       </Link>
       <Link to="/savedPhoto">
      savedphotos
       </Link>

      </div>
    </div>
  )
}

export default Header
