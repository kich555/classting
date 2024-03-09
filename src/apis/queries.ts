import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const queries = createQueryKeyStore({
  question: {
    list: () => ({
      queryKey: ['list'],
      queryFn: () => {},
    }),
  },
});
