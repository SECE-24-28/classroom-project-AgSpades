import { useState , useContext} from 'react'
import React, { use } from 'react'
import { DataContext } from '../context/DataContext'
import api from '../api/Post'

const AddPost = () => {

  const {posts, fetchData, title, setTitle, body, setBody, handleSubmit}=useContext(DataContext)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='' id='' placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/><br/><br/>
        <textarea name='' id='' placeholder='body' value={body} onChange={(e)=>setBody(e.target.value)}/><br /><br />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default AddPost
