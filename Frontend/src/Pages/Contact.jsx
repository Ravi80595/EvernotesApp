import { Box,Flex,Input,Image,Heading,Button } from '@chakra-ui/react'
import React from 'react'
import Imagess from "../Images/Imagess.jpg"

const Contact = () => {
    
const handleClick=()=>{
    alert("Thanks for Your Valueable Message")
}

  return (
    <Box>
      <Flex gap={20} direction={["column-reverse","column-reverse","row"]}>
        <Box p={[0,0,5,10]} textAlign="left" w={["100%","50%",'100%',"50%"]}>
            <Heading mb={5} fontSize={[10,10,20,30]}>Drop Us A Line</Heading>
            <label>Name</label>
            <Input type="text" placeholder="Name"/>
            <label>Email</label>
            <Input type="text" placeholder="Email"/>
            <label>Company</label>
            <Input type="text" placeholder="Company"/>
            <label>Message</label>
            <Input type="text" placeholder="Message"/>
            <Button onClick={handleClick} mt={5}>Submit</Button>
        </Box>
        <Box>
            <Image src={Imagess}/>
        </Box>
      </Flex>
    </Box>
  )
}

export default Contact
