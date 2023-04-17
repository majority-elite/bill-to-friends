import { createStore } from 'solid-js/store';
import { type UserProfile } from '../constants/user';
import { createEffect } from 'solid-js';
import { getAllUserProfiles } from '../api/user';

export const usersStore = createStore<UserProfile[]>([]);

createEffect(async () => {
  const users = await getAllUserProfiles();
  usersStore[1](users);
});

export const pickedUsersStore = createStore<UserProfile[]>([]);
