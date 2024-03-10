export type QuestionType = 'boolean' | 'multiple';
export type QuestionDifficulty = 'easy' | 'medium' | 'hard';
export type QuestionCategory =
  | 'Any Category'
  | 'General Knowledge'
  | 'Entertainment: Books'
  | 'Entertainment: Film'
  | 'Entertainment: Music'
  | 'Entertainment: Musicals &amp; Theatres'
  | 'Entertainment: Television'
  | 'Entertainment: Video Games'
  | 'Entertainment: Board Games'
  | 'Science &amp; Nature'
  | 'Science: Computers'
  | 'Science: Mathematics'
  | 'Mythology'
  | 'Sports'
  | 'Geography'
  | 'History'
  | 'Politics'
  | 'Art'
  | 'Celebrities'
  | 'Animals'
  | 'Vehicles'
  | 'Entertainment: Comics'
  | 'Science: Gadgets'
  | 'Entertainment: Japanese Anime &amp; Manga'
  | 'Entertainment: Cartoon &amp; Animations';

export type Question = {
  type: QuestionType;
  difficulty: QuestionDifficulty;
  category: QuestionCategory;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type GetQuestionsResquest = {
  amount: number;
  category: string;
  difficulty: QuestionDifficulty;
  type: QuestionType;
};

export type GetQuestionsResponse = {
  response_code: number;
  results: Question[];
};
