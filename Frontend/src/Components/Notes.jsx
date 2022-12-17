import React from 'react'
import {Box,Heading,Button, Stack, Container, Grid, GridItem,Input} from '@chakra-ui/react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const Notes = () => {
  const [data,setData] =useState([])
  const [title,setTitle]= useState("")
  const [note,setNote]= useState("")
  const [show,setShow]=useState(false)
  const [not,setNot]=useState("")

const getData=()=>{
  axios.get("http://localhost:2147/notes",{
    headers:{
      authorization:`Bearer ${localStorage.getItem("token")}`
    }
  })
  .then((res)=>{
    console.log(res)
    setData(res.data.notes)
  })
}

useEffect(()=>{
 getData()
},[])

const handleDelete=(noteID)=>{
  console.log("clicked")
  axios.delete(`http://localhost:2147/delete/${noteID}`,{
    headers:{
      authorization:`Bearer ${localStorage.getItem("token")}`
    }
  })
  .then((res)=>{
    console.log(res.data)
    getData()
  })
}

// Edit Function here

const handleEdit=(noteID)=>{
  setNot(noteID)
  // console.log(userID)
  setShow(true)
}
const handleClose=()=>{ 
  document.querySelector(".mainBox").style.display="none"
}

if(show){
  document.querySelector(".mainBox").style.display="block"
}

const handleChange=()=>{
  const payload={
    title,
    note
  }
  axios.patch(`http://localhost:2147/update/${not}`,payload,{
    headers:{
      authorization:`Bearer ${localStorage.getItem("token")}`
    }
  })
  .then((res)=>{
    console.log(res.data)
    setNot("")
    getData()
    setTitle("")
    setNote("")
  })
  
}

  return (
    <>
    <Box className='mainBox' display='none' mt={20} backgroundColor="grey"
              p={10} zIndex='999'>
              <Input mb='5' type='text' placeholder='Enter new Title Here' background='white' value={title} onChange={(e)=>setTitle(e.target.value)}/>
              <Input mb='5' type='text' placeholder='Enter New Note Here' background='white' value={note} onChange={(e)=>setNote(e.target.value)}/>
              <Button mr={2} onClick={handleChange}>Update</Button>
              <Button onClick={handleClose}>Close Box</Button>
          </Box>
    <Box>
      <Heading m='10'>All Notes Here</Heading>
      <Grid gridTemplateColumns="repeat(4,1fr)" gap='15px'>
      {
        data && data.length>0 && data.map((note)=>{
          return( 
            <>
            
            <GridItem border='2px solid red' key={note._id} >
              <Heading fontSize='20px' p={5}>Title:{note.title}</Heading>
              <Heading fontSize='20px'p={5}>Note:{note.note}</Heading>
              <Button m={2} onClick={()=>handleDelete(note._id)}>Delete</Button>
              <Button onClick={()=>handleEdit(note._id)}>Edit</Button>
            </GridItem>
            </>
            
        )
        })
      }
      </Grid>
    </Box>
    </>
  )
}
// onClick={()=>handleEdit(note._id)}
export default Notes
