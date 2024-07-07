import { createSelector } from "@reduxjs/toolkit";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector([selectShop], (shop) =>
  shop ? shop.collections : []
);

//returns an array of collections : hats => all hats collections array
export const selectShopCollectionForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
    
)

//currying concept used here
//returns only single collections, hats or jackets..etc on the basis urlParam
export const selectCollection = createSelector(
  [selectShopCollections],
  (collections) => (collectionUrlParam) => {
    return collections[collectionUrlParam];
  }
);
