import React, { useState } from 'react'
import { Box,Heading,Textarea,Button, Flex } from '@chakra-ui/react'

const TextAnylzer = () => {
  const [text,setText]=useState("")


const onchangehandler=(event)=>{
  setText(event.target.value)
}
// ........................... UperCase Method here ........................

const handleUpClick=()=>{
  let newText = text.toUpperCase()
  setText(newText)
}

// ...........................LowerCase Method here ........................

const handleLowerClick=()=>{
  let newText = text.toLowerCase()
  setText(newText)
}

// ........................... Copy Method here ........................

const handleCopy=()=>{
  var text=document.getElementById("myform")
  text.select();
  navigator.clipboard.writeText(text.value)
  alert(" Text Copied", "Success ")
}

// ........................... Remove Extra Space Method here ........................

const handleExtraSpaces=()=>{
  let newText=text.split(/[ ]+/) 
  setText(newText.join(" "))
  alert(" Extra Spaces Removed", "Success ")
}

  return (
    <Box>
      <Heading pt={5} pb={5}>Enter Text to Analyze</Heading>
      <Textarea id='myform' placeholder='Enter Text Here' value={text} onChange={onchangehandler}></Textarea>
      <Flex p={5} justifyContent='space-evenly' gap={[5,10,2,20]} direction={["column","column","column","row"]}>
      <Button p={["0px 70px","0px 70px","0px 70px","0px 20px"]} onClick={handleUpClick}>ToUpperCase</Button>
      <Button p={["0px 70px","0px 70px","0px 70px","0px 20px"]} onClick={handleLowerClick}>ToLowerCase</Button>
      <Button p={["0px 70px","0px 70px","0px 70px","0px 20px"]} onClick={()=>setText("")}>Reset</Button>
      <Button p={["0px 70px","0px 70px","0px 70px","0px 20px"]} onClick={handleCopy}>Copy Text</Button>
      <Button p={["0px 70px","0px 70px","0px 70px","0px 20px"]} onClick={handleExtraSpaces}>Remove Extra Spaces</Button>
      </Flex>
      <Box textAlign='left'>
      <Heading textAlign='left' fontSize={["20px","30px","30px"]}>Your Text Summary</Heading>
      <p>{text.split(" ").length-1} words and {text.length} charcaters</p>
      <p>{0.008 * text.split(" ").length}Minutes to Read</p>
      <Heading fontSize={["20px","30px","30px"]}>Preview Here To Read Easily</Heading>
      <p>{text}</p>
      </Box>
    </Box>
  )
}


export default TextAnylzer
