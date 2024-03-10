import { Box, Flex } from '@mantine/core';
import { Outlet } from 'react-router-dom';

const QuestionsPage = () => {
  console.log();
  return (
    <Box component="main" h="100vh">
      afsdf
      <Flex direction="column" align="center">
        <Outlet />
      </Flex>
    </Box>
  );
};

export default QuestionsPage;
