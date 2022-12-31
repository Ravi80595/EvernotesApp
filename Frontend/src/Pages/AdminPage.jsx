import React from 'react'
import {Box,Heading,Button,Grid,GridItem,Input,Text,Flex,useDisclosure,Modal,ModalBody,ModalOverlay,ModalCloseButton,ModalContent,ModalHeader} from '@chakra-ui/react'
import axios from 'axios'
import { useState,useEffect } from 'react'



const AdminPage = () => {
    const [data,setData] =useState([])
    const [title,setTitle]= useState("")
    const [note,setNote]= useState("")
    const [category,setCategory]=useState("")
    const {isOpen,onOpen,onClose} = useDisclosure()




const getData=()=>{
    onOpen()
    axios.get("http://localhost:2147/notess",{
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
    axios.delete(`https://enthusiastic-khakis-bee.cyclic.app/delete/${noteID}`,{
      headers:{
        authorization:`Bearer ${localStorage.getItem("token")}`
      }
    })
    .then((res)=>{
      getData()
      alert("Note Deleted Successfully")
    })
  }
  

  return (
    <>
    <Box>
      <Heading m='10'>Admin Page</Heading>
      <Grid gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(4,1fr)"]} gap='15px'>
      {
        data && data.length>0 && data.map((notes)=>{
          return( 
            <>
            <GridItem p={2} boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px' key={notes._id} >
              <Flex justifyContent='space-around'>
                <Text>{notes.NoteDate}</Text>
                <Text>{notes.NoteTime}pm</Text>
              </Flex>
              <Heading fontSize='20px' p={5}>{notes.title}</Heading>
              <Text>Category : {notes.category}</Text>
              <Text fontSize='20px'p={5}>Note : {notes.note}</Text>
              <Button m={2} onClick={()=>handleDelete(notes._id)}>Delete</Button>
              {/* <Button onClick={onOpen}>Edit</Button> */}
            </GridItem>
            <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Update Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mt='-8'>
                        <Flex direction="column" gap="10px" mt="50px">
                        <label>New Title</label>
                        <Input type="text" placeholder="New First Name" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                        <label>New Category</label>
                        <Input type="text" placeholder="New Last Name" value={category} onChange={(e)=>setCategory(e.target.value)}/>
                        <label>New Desc</label>
                        <Input type="text" placeholder="New Role" value={note} onChange={(e)=>setNote(e.target.value)}/>
                        <Button  mb="25px" color="white" bg="black" _hover={{bg:"grey"}} >Update</Button>
                        </Flex> 
                    </ModalBody>
                    </ModalContent>
                </Modal>
            </>
        )
        })
      }
      </Grid>
    </Box>
    </>
  )
}

export default AdminPage
