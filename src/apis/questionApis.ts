import { GetQuestionsResquest, GetQuestionsResponse } from '@/types/questionsTypes';
import { httpClient } from './client';

export const getQuestions = async (
  request: GetQuestionsResquest
): Promise<GetQuestionsResponse> => {
  const response = await httpClient.get('/api.php', {
    param: { ...request },
  });
  return response.data;
};
