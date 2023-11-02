import { createApi } from '@reduxjs/toolkit/query/react';
import { db } from '../../../firebase-config';
import { addDoc, doc, deleteDoc, collection, getDocs, setDoc } from "firebase/firestore";

const firebaseBaseQuery = async ({ baseUrl, url, method, body }) => {
	switch (method) {
		case 'GET':
			const snapshot = await getDocs(collection(db, url));	
			const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
			return { data };

		case 'POST':
			const docRef = await addDoc(collection(db, url), body);
			return { data: { id: docRef.id, ...body } };

		default:
			throw new Error(`Unhandled method ${method}`);
	}
};

export const usersApi = createApi({
  reducerPath: 'usersApi',
	baseQuery: firebaseBaseQuery,
	tagTypes: ['users'],
	endpoints: (builder) => ({
		createUser: builder.mutation({
			query: ({ user }) => ({
				baseUrl: '',
				url: 'users',
				method: 'POST', // PUT = modifiera data - DELETE = ta bort data
				body: user
			}),
			invalidatesTags: ['users']
		}),
    // Lägg till din getUsers här
		getUsers: builder.query({
			query: () => ({
				baseUrl: '',
				url: 'users',
				method: 'GET',
				body: ''
			}),
			providesTags: ['users']
		}),
	}),
});

export const { useCreateUserMutation, useGetUsersQuery } = usersApi;