import React from "react";

import { addItem } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

import { CollectionItemContainer, CollectionFooterContainer, AddToCartButton, ImageContainer, NameContainer, PriceContainer } from "./collection-item.styles";

const CollectionItem = ({ item }) => {
    const { name, imageUrl, price } = item;
    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItem(item));
    }

    return (
    <CollectionItemContainer>
        <ImageContainer imageUrl={imageUrl} />

        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        
        <AddToCartButton onClick ={handleAddItem}>Add to Cart</AddToCartButton>
    </CollectionItemContainer>
    )
}
export default CollectionItem;