import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from "react-router-dom";


let data = JSON.parse(localStorage.getItem('user'))

export default function SimpleCard () {
  const [f_email, setF_email] = useState("");
  const [f_password, setF_password] = useState("");
  const navigate = useNavigate();


  // console.log(data);

  const handle = () => {

    data.forEach((e) => {
      if (f_email === e.email && f_password === e.password) {
        alert("Login successful");
        navigate("/");
      }
      else {
        alert("Login failed");
      }
    })
  }


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'#ff7035'} w={"25rem"}>
            You Will Be Able To Track Your Order, Use Wishlist & More.
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={f_email} onChange={((e) => setF_email(e.target.value))} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={f_password} onChange={((e) => setF_password(e.target.value))} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'#f78352'}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={handle}
                bg={'#ff7035'}
                color={'white'}
                _hover={{
                  bg: '#f78352',
                }}>
                Sign in
              </Button>
              <Stack>
                <Button
                  w={'full'}
                  maxW={'md'}
                  variant={'outline'}
                  leftIcon={<FcGoogle />}>
                  <Center>
                    <Text>Sign in with Google</Text>
                  </Center>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}