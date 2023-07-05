import { atom } from "recoil";

export const userDataAtom = atom({
  key: "userData",
  default: {},
});

export const loadingAtom = atom({
  key: "isLoading",
  default: true,
});

export const ratingAndReviewAtom = atom({
  key: "ratingAndReview",
  default: {
    rating: 0,
    review: "empty",
  },
});
