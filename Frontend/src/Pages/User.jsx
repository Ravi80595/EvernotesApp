import React from 'react'
import { Box,Flex,Text,Image } from '@chakra-ui/react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const User = () => {
    const [adminProfile,setAdminProfile]=useState("")


// ........................... Admin Profile Method here ........................

  const getProfile=()=>{
    axios.get("https://enthusiastic-khakis-bee.cyclic.app/user/userProfile",{
      headers:{
        authorization:`Bearer ${localStorage.getItem("token")}`
      }
    })
    .then((res)=>{
      console.log(res.data)
        setAdminProfile(res.data.Data)
    })
    .catch(function (err){
      console.log(err)
    })
  }

  useEffect(()=>{
   getProfile()
  },[])


  return (
    <Box>
    <Link to="/userprofile">
      {
        adminProfile && adminProfile.map((data)=>{
          return(
            <Flex id='titleBox' p='0px 10px' mb='40px' key={data._id}>
            <Image src={data.avtar} w='45px' borderRadius='50%'/>
            <Box>
            <Text pl={[0,0,5]} fontWeight='bold'>{data.firstname}</Text>
            <Text pl={[0,0,5]} >{data.role}</Text>
            </Box>
            </Flex>
          )
        })
      }
      </Link>
      </Box>
  )
}

export default User
