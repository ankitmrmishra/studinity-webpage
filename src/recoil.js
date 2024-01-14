import { atom, selector } from 'recoil';

export const openState = atom({
  key: "openState",
  default: false,
});



export const userState = atom({
  key: 'userState',
  default: null,
});

export const loggedInUser = selector({
  key: 'loggedInUser',
  get: ({ get }) => {
    return get(userState);
  },
  set: ({ set }, newValue) => {
    set(userState, newValue);
  },
});
