import { createSelector } from "@reduxjs/toolkit";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector([selectShop], (shop) =>
  shop ? shop.collections : []
);

export const selectShopCollectionForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
    
)

//currying concept used here
export const selectCollection = createSelector(
  [selectShopCollections],
  (collections) => (collectionUrlParam) => {
    return collections[collectionUrlParam];
  }
);
