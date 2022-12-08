import  React from 'react'
import './App.css'
import { Box , Button,  Flex,  Text, Textarea,useColorMode, useColorModeValue } from "@chakra-ui/react";
import {SunIcon, MoonIcon} from "@chakra-ui/icons"
function App() {

  const bgcolor = useColorModeValue("#fff", "#00440")
  const color = useColorModeValue("blue","white")
  const iconColor = useColorModeValue("black", "white")
  const signColor = useColorModeValue("black", "white")

  const { colorMode, toggleColorMode } = useColorMode();
 
  return (
    <Box  as='div' className='App' bg={bgcolor}>
<Box boxShadow={"lg"} as={'div'} mt='5%' m={"auto"} p='3%' bg={bgcolor} maxW={{'xl': "35%",'lg': "35%",'md': "35%",'sm':"100%"}}
 maxh='82vh' border={'0.5px solid #C1C1C0'} borderRadius='20px' color={'white'} fontFamily='heading'>

<Flex justify={'space-between'} bg={bgcolor}>

<Text as={'b'} fontSize='33px'  pb='15px' color={color} bg={bgcolor}>Coinbase</Text>

<Button onClick={toggleColorMode} bg={bgcolor} p="7">
  {colorMode === "light" ?(
      <MoonIcon bg={bgcolor} color={iconColor} />

  ) :(
    <SunIcon/>
  ) }

</Button>

</Flex> <br />

  <Text as={'h1'} pb='3% ' fontSize={'30px'} color={signColor} pt={'15px'} bg={bgcolor} >Sign in to Coinbase </Text> 
  
  <Text color='rgb(121, 145, 139)' pb='4%' fontSize='15px' pt={'10px'} bg={bgcolor}>Not your device? Use a private or incongnito window to <br /> sign in </Text>

  <Text as={'p'} fontSize='20px' mb={"2"} color={signColor} bg={bgcolor} >Email</Text>

  <Textarea placeholder='Your email address' resize={'none'}/> 

  <Button mt={'5%'} bg='rgb(71,126,246)' color={'black' } size='lg' w={'100%'} borderRadius='25px'>Continue</Button>

  <Text textAlign={'center'} pt='6%' fontSize={'13px'} color='rgb(35,94,238)' bg={bgcolor}>Sign in to a business account</Text>

  <Text textAlign={'center'} pt='2%' fontSize={'13px'} color='rgb(35,94,238)' bg={bgcolor}>privacy policy</Text>
</Box>
</Box>
  )
}

export default App;
