import React from 'react'
import { Box,Heading,Input,Stack,Button} from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'
import { baseUrl } from './Components/BaseUrl'

const CreateNote = () => {
    const [title,setTitle]=useState("")
    const [note,setNote] = useState("")
    const [category,setCategory] = useState("")


// ........................... Create Method here ........................

const handleAdd=()=>{
  const payload={
    title,
    note,
    category
  }
axios.post(`${baseUrl}/create`,payload,{
  headers:{
    authorization:`Bearer ${localStorage.getItem("token")}`
  }
})
.then((res)=>{
  console.log(res)
  alert("Note Added Success")
  setTitle(' ')
  setNote(" ")
  setCategory(" ")
})
.catch(function (err){
  console.log(err)
})
}

  return (
    <Box>
      <Heading fontSize={[20,10,20,30]}>Create Note Here</Heading>
      <Stack w={["100%","80%","80%","30%"]} m='auto' mt={5} p={10} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' textAlign='left'>
      <label>Title</label>
      <Input type='text' placholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <label>Category</label>
      <Input type='text' placholder='Enter Category' value={category} onChange={(e)=>setCategory(e.target.value)}/>
      <label>Desc</label>
      <Input type='text' placholder='Enter Tag' value={note} onChange={(e)=>setNote(e.target.value)}/>
      <Button onClick={handleAdd}>Add</Button>
      </Stack>
    </Box>
  )
}

export default CreateNote
