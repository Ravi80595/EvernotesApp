import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Box,
    Button,
  } from '@chakra-ui/react'
import { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const [email,setEmail]=useState("")
    const [password, setPassword] = useState('')
    const [error,setError]= useState(false)
    const navigate=useNavigate()


const handleSubmit=()=>{
    const payload={
        email,
        password
    }
axios.post("https://modern-neckerchief-toad.cyclic.app/user/login",payload)
.then((res)=>{
    console.log(res.data.token)
    alert(res.data.msg)
    localStorage.setItem("token",res.data.token)
    navigate("/")
})
.catch(function (err){
    alert(err.response.data.msg)
    setError(true)
  })
}


  return (
    <Box w={['80%','50%','50%','30%']} m='auto' boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' p='5' mt='100px'>
    <Box textAlign='center' fontWeight="bold" fontSize="22px">Admin </Box>
    <FormControl>
      <FormLabel>Email*</FormLabel>
      <Input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      {
        error?<FormErrorMessage>Email is required.</FormErrorMessage>:""
      }
      <FormLabel>Password*</FormLabel>
      <Input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <Button mt="15px" mb={5} _hover={{ bg: "rgb(65, 63, 63)" }} w="100%" color="white"  bg="black" onClick={handleSubmit}>Login</Button>
      <Link to="/sign">
      <Button w='100%' _hover={{ bg: "rgb(65, 63, 63)",color:'white' }} m='auto'> Don't have an Account SignUp</Button>
      </Link>
    </FormControl>
  

   </Box>
  )
}

export default AdminLogin
