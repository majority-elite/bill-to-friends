import { createStore } from 'solid-js/store';
import { type Purchased } from '../constants/bill';

const initialState: Purchased = {
  name: '',
  price: 0,
  users: [],
};

export const purchasedListStore = createStore<Purchased[]>([
  { ...initialState },
]);

export const addPurchased = () => {
  purchasedListStore[1]((prev) => [...prev, { ...initialState }]);
};

export const deletePurchased = (index: number) => {
  purchasedListStore[1]((prev) =>
    prev.length > 1
      ? prev.filter((item, itemIndex) => itemIndex !== index)
      : [{ ...initialState }],
  );
};
