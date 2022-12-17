import { Box,Input,Button,Flex,Stack,Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'

const SignupPage = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")
    // const [response,setResponse] = useState(false)

    const handleSubmit=()=>{
        const payload ={
            email,
            password
        }
        axios.post("http://localhost:2147/user/signup",payload)
        .then((res)=>{
            // setResponse(true)
            console.log(res.data.msg)
            alert("Signup Success")
        })
        .catch(function (error) {
            console.log(error);
        });
    }

  return (
    <>
    <Box>
      <Heading m={10}>Sign Up Here</Heading>
    <Stack w='35%' m='auto' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' p='5' h='300px'>
      <Input mb='5' type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <Input mb='5'  type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <Button mt='5'  onClick={handleSubmit}>Sign Up </Button>
      </Stack>
    </Box>
    </>
  )
}

export default SignupPage
