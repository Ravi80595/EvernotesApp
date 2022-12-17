import styles from "./Navbar.css"
import {HamburgerIcon} from "@chakra-ui/icons"
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
    DrawerCloseButton,
    Image,
    Tabs,
    TabList,
    Tab,
    Text,
    Flex,
    Box
  } from '@chakra-ui/react'
// import mobLogo from "../../assets/mobLogo.jpeg"
// import { BsBag } from "react-icons/bs";
// import { IoIosHeartEmpty } from "react-icons/io";
// import Login from "../Login/Login";
// import MobLogin from "../Login/MobLogin";

const MobNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex justifyContent="space-between" alignItems="center" >
      <Button p="8px" color="black" bg="white" onClick={onOpen} >
        <HamburgerIcon  w="30px" h="30px" />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}  size="full">
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton/>
          {/* <Image w="50px" src={mobLogo} /> */}
            <Tabs mt="10px" defaultIndex={1}>
            <TabList>
                <Tab>WOMEN</Tab>
                <Tab>MEN</Tab>
                <Tab>KIDS</Tab>
            </TabList>
            </Tabs>
          <DrawerBody>
            <Flex mt="5px" gap="20px" direction="column" >
                <Text>Gifts</Text>
                <Text>New In</Text>
                <Text>Brands</Text>
                <Text>Clothing</Text>
                <Text>Shoes</Text>
                <Text>Sneakers</Text>
                <Text>Bags</Text>
                <Text>Accessories</Text>
                <Text>Watches</Text>
                <Text>Sale</Text>
            </Flex>
            <Text mt="15px">MY ACCOUNT</Text>
            <Flex direction="column">
                {/* <MobLogin name="Sign In" /> */}
                {/* <MobLogin name="Register" /> */}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box>
        <Text fontSize="24px" fontWeight="bold">OVERSTOCK</Text>
      </Box>
      <Flex gap="10px" mr="10px">
        {/* <IoIosHeartEmpty className={styles.logo} /> */}
        {/* <BsBag className={styles.logo} /> */}
      </Flex>
    </Flex>
  );
};

export default MobNav;
