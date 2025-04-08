// import { create } from 'zustand';
// import { createJSONStorage, persist } from 'zustand/middleware';
// import MMKVStorage from 'react-native-mmkv-storage';
// import { auth } from './firebaseConfig';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
// } from 'firebase/auth';

// const MMKV = new MMKVStorage.Loader().initialize();

// const useUserStore = create(
//   persist(
//     (set, get) => ({
//       user: null,
//       register: (email, password) => {
//         const fakeUser = { email, password };
//         set({ user: fakeUser });
//       },
//       login: (email, password) => {
//         const currentUser = get().user;
//         if (currentUser && currentUser.email === email && currentUser.password === password) {
//           set({ user: currentUser });
//         } else {
//           alert('Invalid credentials');
//         }
//       },
//       logout: () => set({ user: null }),

//       // Firebase Auth functions
//       register: async (email, password) => {
//         try {
//           const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//           set({ user: userCredential.user });
//         } catch (error) {
//           alert(error.message);
//         }
//       },

//       login: async (email, password) => {
//         try {
//           const userCredential = await signInWithEmailAndPassword(auth, email, password);
//           set({ user: userCredential.user });
//         } catch (error) {
//           alert(error.message);
//         }
//       },

//       logout: async () => {
//         try {
//           await signOut(auth);
//           set({ user: null });
//         } catch (error) {
//           alert(error.message);
//         }
//       },
//     }),
//     {
//       name: 'users-storage',
//       storage: createJSONStorage(() => MMKV),
//     }
//   )
// );

// export default useUserStore;