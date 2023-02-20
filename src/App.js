import { Flex } from '@chakra-ui/react';
import Converter from './components/Converter';

function App() {
  return (
    <>
      <Flex
        bgGradient="linear(to-t, #ae085c, #2e0656)"
        height="100vh"
        justifyContent="center"
      >
        <Converter />
      </Flex>
    </>
  );
}

export default App;
