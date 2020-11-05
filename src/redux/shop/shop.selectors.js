import { createSelector } from 'reselect';

const selectShop = (state) => {
  return state.shop;
};

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopItems],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) => {
  return createSelector([selectShopItems], (collections) =>
    collections.find(
      (collection) => collection.routeName === collectionUrlParam
    )
  );
};
