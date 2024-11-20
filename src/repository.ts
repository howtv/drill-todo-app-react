import { db } from "./firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import type { DraftTask, Task } from "./useHandleTasks";

export const getFirestoreTasks = async () => {
  const tasks = [] as Task[];
  (await getDocs(query(collection(db, "tasks")))).forEach((doc) => {
    tasks.push({
      id: doc.id,
      ...doc.data(),
    } as Task);
  });
  return tasks;
};

export const addFirestoreTask = async (task: DraftTask) => {
  await addDoc(collection(db, "tasks"), task);
};

export const setFirestoreTaskDone = async (task: Task, done: boolean) => {
  await updateDoc(doc(db, "tasks", task.id), {
    title: task.title,
    done,
  });
};

export const removeFirestoreTask = async (task: Task) => {
  await deleteDoc(doc(db, "tasks", task.id));
};
