import React from 'react'
import axios from "axios"

async function photoinfo() {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
      return response.data;
    } catch (error) {
      console.error('Error fetching photo information:', error);
      throw error;
    }
  }

async function postinfo(){
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return response.data
  } catch (error) {
    console.error('Error fetching photo information:', error);
    throw error;
    
  }
       
  
}
export {
    photoinfo,
    postinfo
};



