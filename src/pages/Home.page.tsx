import { Box, Flex } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export function HomePage() {
  return (
    <Box component="main" h="100vh">
      <Flex direction="column" align="center">
        <Welcome />
        <Box>
          <ColorSchemeToggle />
        </Box>
      </Flex>
    </Box>
  );
}
