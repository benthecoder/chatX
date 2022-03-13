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
  Image,
  Divider,
  Spacer,
  Icon,
  FormHelperText,
  FormErrorMessage,
  HStack,
} from '@chakra-ui/react';
import { FaRegSnowflake } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function Signup() {
  return (
    <Stack
      display={'flex'}
      h={'100vh'}
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex justify={'center'} align={'center'} flex={0.4}>
        <Stack mx={50} minW='40vw' px={5}>
          <Box p={5} rounded='lg'>
            <Icon as={FaRegSnowflake} w={12} h={12} mb={5} color='blue.400' />
            <Stack spacing={4}>
              <Heading fontSize='4xl'>Login</Heading>
              <Text fontSize='lg' color='gray.400'>
                Chat and Chill today.
              </Text>
              <Button
                leftIcon={<FcGoogle />}
                size='lg'
                variant='outline'
                bgColor='white'
                color='black'
                borderRadius={100}
                _hover={{
                  bg: 'white',
                }}
              >
                Login with Google
              </Button>
              <Text fontSize='sm' color='gray.400' align='center'>
                or Login with Email
              </Text>
              <Divider />
              <FormControl isRequired>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input type='email' id='email' />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input type='password' id='password' />
              </FormControl>
              <Stack direction={{ base: 'column', sm: 'row' }} align='start'>
                <Checkbox>Remember me</Checkbox>
                <Spacer />
                <Link href='/signup' color='blue.400'>
                  Forgot Password?
                </Link>
              </Stack>
              <Button bgColor='blue.400' size='lg' borderRadius={100}>
                Login
              </Button>
              <Text>
                Not registered yet?{' '}
                <Link href='/signup' color='blue.400'>
                  Sign up
                </Link>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Flex h={'100vh'} flex={0.6}>
        <Image
          alt='Login Image'
          w={'100vw'}
          objectFit='cover'
          src='https://images.unsplash.com/photo-1646734329499-0afb2db25fb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        />
      </Flex>
    </Stack>
  );
}
