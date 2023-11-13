import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersApi } from './api/usersApi';
import authSlice from './slices/authSlice';

const middlewares = [usersApi.middleware];

if (process.env.NODE_ENV === `development`) {
	const { logger } = require(`redux-logger`);
	middlewares.push(logger);
}

export const store = configureStore({
	reducer: {
		[usersApi.reducerPath]: usersApi.reducer,
		auth: authSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(...middlewares),
});

setupListeners(store.dispatch);
