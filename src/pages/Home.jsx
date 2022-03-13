import { Text, Center } from '@chakra-ui/react';
import { authentication } from '../firebase-config';
import { signOut } from 'firebase/auth';

function Home() {
  const signOutGmail = () => {
    signOut(authentication)
      .then(() => {
        const userclass = document.querySelector('.myclass');
        userclass.parentNode.removeChild(userclass);
        console.log('Signed out');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Center>
      <Text fontSize='6xl'>Chat App</Text>;
    </Center>
  );
}

export default Home;
