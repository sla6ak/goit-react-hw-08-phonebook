import { configureStore } from '@reduxjs/toolkit';
import { filterContacts } from './sliceFilter';

export const store = configureStore({
  reducer: { filter: filterContacts.reducer },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
});
