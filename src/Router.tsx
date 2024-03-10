import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import QuestionsPage from './pages/Questions.page';
import Question from './components/Question/Question';
import QuestionInfoPage from './components/QuestionInfo/QuestionInfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/questions',
    element: <QuestionsPage />,
    children: [
      {
        path: 'info',
        element: <QuestionInfoPage />,
      },
      {
        path: ':id',
        element: <Question />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
