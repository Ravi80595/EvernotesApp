import { Box,Text,Flex,Button} from '@chakra-ui/react'
import React from 'react'
import "./HomePage.css"
import {BsTagsFill} from 'react-icons/bs'
import {FaRupeeSign,FaUserAlt} from 'react-icons/fa'
import {CiDiscount1} from 'react-icons/ci'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineTeam} from 'react-icons/ai'
import CreateNote from './CreateNote'
import TextAnylzer from './TextAnylzer'
import TrashPage from './TrashPage'
import AllNotes from "../Pages/AllNotes"
import {FaCalculator} from "react-icons/fa"
import Calculator from './Calculator'
import User from './User'
import { useEffect } from 'react'
import Contact from './Contact'


const Dashboard = () => {
  const [show,setShow]=useState("Users")
  const [usershow,setUserShow] = useState("")
  const navigate=useNavigate()
  let r=`Bearer ${localStorage.getItem("token")}`


// ........................... Admin Or Sign Button Method ........................

const getShow=()=>{
  if(r=="Bearer null"){
    setUserShow("show")
  }else{
    setUserShow("Hide")
  }
}
useEffect(()=>{
  getShow()
},[])

 {/* ..................  Logout method Here ........................ */}

 const handleLogout=()=>{
  const emptyToken="null"
  localStorage.setItem("token",emptyToken)
  navigate("/login")
}

  return (
    <Flex w='100%'>               
      <Box id='lhsBox' w={["5%","10%","16%"]} h='100vh' p='20px'>
        {
          usershow==="show"?<Box>
          <Link to='/sign'>
          <Button p={["0px 0px","0px 70px","0px 70px","0px 100px"]}>Signup</Button>
         </Link>
        </Box>:<User/>
            } 
        <Box id='linkBox'>
          <hr />
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow("Users")}>
          <FaUserAlt className='lhsLogo'/>
          <Text pl='15px' className="lhsName">Home </Text>
          </Flex>
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow(2)}>
          <BsTagsFill className='lhsLogo'/>  
          <Text pl='15px' className="lhsName">Text Analyzer</Text>
          </Flex>
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow(3)}>
          <FaRupeeSign className='lhsLogo'/>  
          <Text pl='15px' className="lhsName">Create Note</Text>
          </Flex>
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow('Trash')}>
          <CiDiscount1 className='lhsLogo'/>
          <Text pl='15px' className="lhsName">Trash</Text>
          </Flex>
          <hr />
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow("AllAdmin")}>
          <FaCalculator className='lhsLogo'/>
          <Text pl='15px' className="lhsName">Calculator</Text>
          </Flex>
          <Flex id='usersBox' p='7px 17px' className='linkItem' onClick={()=>setShow("Contact")}>
          <AiOutlineTeam className='lhsLogo'/>
          <Text pl='15px' className="lhsName">Contact Us</Text>
          </Flex>
        </Box>
      </Box>
      <Box id='rhsBox' w='84%' ml='16%' h='auto'> 
        <Box id='navbarBox'  p='0px 40px'>
          <Flex justifyContent='space-between' pt={3} mb={3}>
            <Text fontWeight='bold'>Evert Note</Text>
            <Button _hover={{bg:"rgb(134, 130, 238)",color:"white"}} onClick={handleLogout} mb={2} >Log Out</Button>
          </Flex>
        </Box>
      <Box id='rhsBody' m='30px' p='30px'>
        {
          show==="Users"?<AllNotes/>:show==2?<TextAnylzer/>:show==3?<CreateNote/>:show=="AllAdmin"?<Calculator/>:show=="Contact"?<Contact/>:show=="Trash"?<TrashPage/>:<h1>r</h1>
        }
      </Box>
      </Box>
    </Flex>
  )
}

export default Dashboard
