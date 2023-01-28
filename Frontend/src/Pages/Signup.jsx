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

const Signup = () => {
  const [firstname,setFirstName]=useState("")
  const [lastname,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [password, setPassword] = useState('')
  const [error,setError]= useState(false)
  const navigate=useNavigate()




// Submit Function
const handleSubmit=()=>{
    const payload={
      firstname,
      email,
      lastname,
      password
    }
    // Signup request with payload
axios.post("https://modern-neckerchief-toad.cyclic.app/user/signup",payload)
.then((res)=>{
  alert('Signup Success')
  navigate("/")
  console.log(res)
})
.catch(function (err){
  // alert(err.response.data.msg)
  setError(true)
})
}


  return (

     <Box w={['80%','50%','50%','30%']} m='auto' boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' p='5' mt='100px'>
      <Box textAlign='center' fontWeight="bold" fontSize="22px">Admin </Box>
      <FormControl>
      <FormLabel>First Name*</FormLabel>
        <Input type="text" placeholder='First Name' value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
        <FormLabel>Last Name</FormLabel>
        <Input type="text" placeholder='Last Name' value={lastname} onChange={(e)=>setLastName(e.target.value)}/>
        <FormLabel>Email*</FormLabel>
        <Input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        {
          error?<FormErrorMessage>Email is required.</FormErrorMessage>:""
        }
        <FormLabel>Password*</FormLabel>
        <Input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Button mt="15px" mb={5} _hover={{ bg: "rgb(65, 63, 63)" }} w="100%" color="white"  bg="black" onClick={handleSubmit}>Sign Up</Button>
        <Link to="/login">
        <Button w='100%' _hover={{ bg: "rgb(65, 63, 63)",color:'white' }} m='auto'> Already have an Account Login</Button>
        </Link>
      </FormControl>
     </Box>
  )
}

export default Signup
