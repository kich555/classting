import { Title, Text, Anchor, Button, Center } from '@mantine/core';
import classes from './Welcome.module.css';
import DimmedBox from '../DimmedBox/DimmedBox';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'teal', to: 'aqua' }}>
          CLASSTING
        </Text>
      </Title>
      <DimmedBox>
        <Text ta="center" size="lg" maw={580} mx="auto">
          해당 프로젝트는 CLASSTING과제를 목적으로 제작되었으며 React 18, Vitest, Module.css,
          Mantine UI, Tanstack Query, Typescript, StoryBook, 등으로 구성되었습니다. 프로젝트에 대한
          설명은{' '}
          <Anchor href="https://github.com/kich555/classting/blob/master/README.md" size="lg">
            README
          </Anchor>{' '}
          를 참고해주세요
        </Text>
      </DimmedBox>
      <Center my="xl">
        <Button
          component="a"
          href="/questions/info"
          className={classes.button}
          variant="gradient"
          gradient={{ from: 'aqua', to: 'cyan' }}
        >
          퀴즈 시작하기
        </Button>
      </Center>
    </>
  );
}
