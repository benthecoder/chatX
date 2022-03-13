import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Landing from './pages/Landing';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
      },
      a: {
        color: '#c51f5d',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
