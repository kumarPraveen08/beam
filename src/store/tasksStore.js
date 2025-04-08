// import { create } from 'zustand';
// import { createJSONStorage, persist } from 'zustand/middleware';
// import MMKVStorage from 'react-native-mmkv-storage';

// const MMKV = new MMKVStorage.Loader().initialize();

// const useTasksStore = create(
//   persist(
//     (set, get) => ({
//       tasks: [],
//       addTask: (task) => set({ tasks: [...get().tasks, task] }),
//       updateTask: (id, updates) =>
//         set({
//           tasks: get().tasks.map((task) =>
//             task.id === id ? { ...task, ...updates } : task
//           ),
//         }),
//       deleteTask: (id) =>
//         set({ tasks: get().tasks.filter((task) => task.id !== id) }),
//       clearTasks: () => set({ tasks: [] }),
//     }),
//     {
//       name: 'tasks-storage',
//       storage: createJSONStorage(() => MMKV),
//     }
//   )
// );

// export default useTasksStore;