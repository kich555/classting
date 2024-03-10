import { Box } from '@mantine/core';
import classes from './DimmedBox.module.css';

const DimmedBox: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Box bg="gray" p={24} mt="xl" c="white" className={classes.dimmedBox}>
    {children}
  </Box>
);

export default DimmedBox;
