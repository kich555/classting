import { Title, Text, Anchor, Button, Center } from '@mantine/core';
import classes from './QuestionInfo.module.css';
import DimmedBox from '../DimmedBox/DimmedBox';

const QuestionInfoPage = () => {
  console.log('->', import.meta.env.VITE_API_BASE_URL);
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Question{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'teal', to: 'aqua' }}>
          Info
        </Text>
      </Title>
      <DimmedBox>
        <Text ta="center" size="lg" maw={580} mx="auto">
          문제는 4지선다 입니다.
          <br />
          답안을 선택해야 다음 문제로 넘어갈 수 있습니다.
          <br />
          답안을 선택할 시 해당 답이 맞았는지 틀렸는지 바로 알 수 있습니다.
          <br />
          답안을 선택한 후 다음 문항 버튼을 클릭하여 다음 문항으로 이동해주세요
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
      <></>
    </>
  );
};

export default QuestionInfoPage;
