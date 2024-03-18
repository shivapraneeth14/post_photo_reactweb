import { createSlice } from "@reduxjs/toolkit";

export const Dataslice = createSlice({
    name: 'data',
    initialState:{
        savedphotos:[],
        savedposts:[],
    },
    reducers:{
        savephoto:(state,action)=>{
            state.savedphotos.push(action.payload)
            localStorage.setItem('savedPhotos', JSON.stringify(state.savedphotos)); 
        },
        deletephoto:(state,action)=>{
            state.savedphotos = state.savedphotos.filter((photo)=> photo.id !== action.payload.id)
            localStorage.setItem("savedPhotos",JSON.stringify(state.savedphotos))
        },
        savepost:(state,action)=>{
            state.savedposts.push(action.payload);
            localStorage.setItem('savedPosts', JSON.stringify(state.savedposts));
        },
        deletepost:(state,action)=>{
            state.savedposts = state.savedposts.filter((post)=> post.id !== action.payload.id)
            localStorage.setItem('savedPosts', JSON.stringify(state.savedposts));
        },
    }
})

export const { savephoto, deletephoto, savepost, deletepost } = Dataslice.actions
export const Datareducer = Dataslice.reducer