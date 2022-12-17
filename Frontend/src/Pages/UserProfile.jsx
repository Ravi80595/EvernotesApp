import { Box,Flex,Image,Text,Button,Heading,Input,Modal,ModalOverlay,ModalCloseButton,ModalHeader,ModalContent,ModalBody } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'


const AdminProfile = () => {
    const [adminProfile,setAdminProfile]=useState("")
    const [firstname,setFirstName]=useState("")
    const [lastname,setLastName]=useState("")
    const [role,setRole]=useState("")
    const [avtar,setAvtar]=useState("")
    const {isOpen,onOpen,onClose}=useDisclosure()
    const navigate = useNavigate()

    console.log(adminProfile)

//.................... Admin Profile Get Method .....................//

const getProfile=()=>{
    axios.get("https://enthusiastic-khakis-bee.cyclic.app/user/userProfile",{
        headers:{
        authorization:`Bearer ${localStorage.getItem("token")}`
        }
    })
    .then((res)=>{
        console.log(res.data.Data)
        setAdminProfile(res.data.Data)
    })
    .catch(function (err){
        console.log(err)
    })
}
useEffect(()=>{
    getProfile()
},[])

  //.................... Admin Profile Update Method .....................//

  const handleUpdate=()=>{
    const payload={
      firstname,
      lastname,
      role,
      avtar
    }
    axios.patch("https://enthusiastic-khakis-bee.cyclic.app/user/userProfileEdit",payload,{
      headers:{
        authorization:`Bearer ${localStorage.getItem("token")}`
      }
    })
    .then((res)=>{
      console.log(res)
      getProfile()
    })
    .catch(function (err){
      console.log(err)
    })
  }

 {/* ..................  Logout method Here ........................ */}

const handleLogout=()=>{
    const emptyToken=""
    localStorage.setItem("token",emptyToken)
    navigate("/login")
}

  return (
    <Box>
      {
          adminProfile && adminProfile.map((data)=>{
              return(
                <>
                <Box id='navbarBox'  p='0px 40px' key={data._id}>
                <Flex justifyContent='space-between' pt={3} mb={3}>
                     <Text fontWeight='bold'>Good Evening {data.firstname}</Text>
                     <Button onClick={handleLogout} _hover={{bg:"rgb(134, 130, 238)",color:"white"}} mb={2} >Log Out</ Button>
                 </Flex>
                 </Box>
                 <Link to="/">
                  <Text pt={5} pb={5} textAlign="left">Dashboard {data.firstname}</Text>
                  </Link>
                <Flex direction={["column","column","column","row"]} w='85%' m='auto' boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                    <Box w='30%' m='auto'>
                        <Image src={data.avtar} w={300} m={10}/>
                        <Text textAlign='center'>Joining Date</Text>
                        <Text textAlign='center'>{data.createdAt}</Text>
                    </Box>
                    <Box w="70%" p="20px">  
                    <Flex justifyContent='space-around'>
                        <Heading>{data.firstname}</Heading>
                        <Button onClick={onOpen} >Edit Profile</Button>
                        </Flex>
                    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Update Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mt='-8'>
                        <Flex direction="column" gap="10px" mt="50px">
                        <label>First-Name</label>
                        <Input type="text" placeholder="New First Name" value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
                        <label>Last-Name</label>
                        <Input type="text" placeholder="New Last Name" value={lastname} onChange={(e)=>setLastName(e.target.value)}/>
                        <label>Nick-Name</label>
                        <Input type="text" placeholder="New Role" value={role} onChange={(e)=>setRole(e.target.value)}/>
                        <label>Profile Photo</label>
                        <Input type="text" placeholder="Enter New Name" value={avtar} onChange={(e)=>setAvtar(e.target.value)}/>
                        <Button onClick={handleUpdate} mb="25px" color="white" bg="black" _hover={{bg:"grey"}} >Update</Button>
                        </Flex> 
                    </ModalBody>
                    </ModalContent>
                </Modal>
                        <Box textAlign='center' fontSize='20px' mt='20px' p={5}>
                        <Flex justifyContent='space-around' w='70%' m='auto' mt={5} gap={10}>
                            <Text w={['80%','80%','50%','40%']}>First-Name</Text>
                            <Input disabled placeholder={data.firstname} color='black'/>
                        </Flex>
                        <Flex justifyContent='space-around' w='70%' m='auto' mt={5} gap={10}>
                            <Text w='40%'>Last-Name</Text>
                            <Input disabled placeholder={data.lastname}/>
                        </Flex>
                        <Flex justifyContent='space-around' w='70%' m='auto' mt={5} gap={20}>
                            <Text w='40%'>Email</Text>
                            <Input disabled placeholder={data.email}/>
                        </Flex>
                        <Flex justifyContent='space-around' w='70%' m='auto' mt={5} gap={20}>
                            <Text w='40%'>Nick-Name</Text>
                            <Input disabled placeholder={data.role} textColor='red'/>
                        </Flex>
                        </Box>
                        <Box w='30%' m='auto' mt={10}>
                        <Button p={["0px 70px","0px 70px","0px 70px","0px 100px"]} alignItems='center' m='auto'>Delete Your Account</Button>
                        </Box>
                    </Box>
                </Flex> 
                <Box pt={20} w="80%" m='auto' borderColor='red' p={10}>
                    <Text>Hey i Am Ravi Sharma Founder of PharmBuddy. And i am thanking you  
                       <b> {data.firstname} </b>for Your hard work. 
                    </Text>
                </Box>
                </>
              )
            })
          }
    </Box>
  )
}

export default AdminProfile
