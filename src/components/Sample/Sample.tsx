import { FC, memo } from 'react';
import { Box } from "@chakra-ui/react"
import { ChakraProvider } from '@chakra-ui/react';

export type SampleProps = {
  name: string;
};

export const Sample: FC<SampleProps> = memo(({ name }) => (
  <>
    <h1>Sample</h1>
    <Box bg="tomato" w="100%" p={16} color="white">
      { name }
    </Box>
  </>
));
