import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { photoinfo, postinfo } from '../Data/Datainfo'


function Header() {
  const [alldata,setalldata] = useState([])
  const [searchdata,setsearchdata] = useState([])
  const [searchtearm,setsearchterm] = useState([])
  useEffect(()=>{
    async function fetchdata(){
      try {
        const postdata = await postinfo();
        const photodata = await photoinfo();
        console.log("postdata",postdata)
        console.log("photodata",photodata)
        const mergeddata =[...postdata,...photodata]
        console.log("mergeddata",mergeddata)
        setalldata(mergeddata)
      } catch (error) {
        console.log(error)
        
      }
    }
    fetchdata()
  },[])
  useEffect(()=>{
    const filtereddata = alldata.filter((data)=>(
      data.title.toLowerCase().includes(searchtearm)
    ))
    setsearchdata(filtereddata)
  },[searchtearm])

 


  return (
    <div>
      <div className=' rounded-xl text-white pt-4 bg-black w-full h-24 flex justify-around'>
       <Link to="/">
       home
       </Link>
       <div className=' z-50'>
       <input 
       onChange={(e)=>setsearchterm(e.target.value)}
       placeholder='search'
       className=' w-96 text-black rounded-xl h-8' type="text" />
       {searchtearm &&  searchdata.slice(0, 10).map((data,index)=>(
         <div  className='  border border-b-black text-xs  w-96 h-7 rounded-xl bg-white text-black ' key={index}>{data.title}</div>
       ))}
        
       </div>
     
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
