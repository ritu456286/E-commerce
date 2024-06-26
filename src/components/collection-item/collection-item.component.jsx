import React from "react";
import './collection-item.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CollectionItem = ({ item }) => {
    const { name, imageUrl, price } = item;
    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItem(item));
    }

    return (
    <div className="collection-item">
        <div
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />

        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        
        <CustomButton inverted onClick ={handleAddItem}>Add to Cart</CustomButton>
    </div>
    )
}
export default CollectionItem;