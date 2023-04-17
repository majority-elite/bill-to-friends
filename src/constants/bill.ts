import { type UserProfile } from './user';

export interface Purchased {
  name: string;
  price: number;
  users: UserProfile[];
}
